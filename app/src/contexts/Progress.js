import React, { useState, createContext } from 'react';

//context API로 spinner 컴포넌트의 렌더링상태를 전역적으로 관리
const ProgressContext = createContext({
    inProgress: false,
    spinner: () => {},
});

const ProgressProvider = ({ children }) => {
    const [inProgress, setInProgress] = useState(false);

    const spinner = {
        start: () => setInProgress(true),
        stop: () => setInProgress(false),
    }

    //벨류로 inprogress, spinner 상태를 관리하는 함수를 전달
    const value = { inProgress, spinner };

    return (
        <ProgressContext.Provider value={value} >
            {children}
        </ProgressContext.Provider>
    )
}

export { ProgressContext, ProgressProvider };