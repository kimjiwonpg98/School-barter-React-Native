import React, { useState, createContext } from "react";

//context API로 spinner 컴포넌트의 렌더링상태를 전역적으로 관리
const ReadyContext = createContext({
  isReady: false,
  readyDispatch: () => {},
});

const ReadyProvider = ({ children }) => {
  const [isReady, setIsReady] = useState("");

  const readyDispatch = {
    ready: () => setIsReady(true),
    notReady: () => setIsReady(false),
  };

  //벨류로 inprogress, spinner 상태를 관리하는 함수를 전달
  const value = { isReady, readyDispatch };

  return (
    <ReadyContext.Provider value={value}>{children}</ReadyContext.Provider>
  );
};

export { ReadyContext, ReadyProvider };
