import React, { useState, createContext } from "react";

const StudentContext = createContext({
  student: { student: null },
  dispatch: () => {},
});

// 이메일과 uid를 가진 객체(user)를 수정 가능한 dispatch함수를 value로 전달하는 컴포넌트
const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState({});

  const dispatch = ({ id }) => {
    setStudent({ id });
  };

  const value = { student, dispatch };
  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
