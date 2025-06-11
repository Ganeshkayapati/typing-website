import { createContext, use, useContext, useState } from "react";

const TextModeContext = createContext();

export const TextModeContextProvider = ({children})=>{

    const [testTime, setTestTime] = useState(15);
    const values = {
        testTime,
        setTestTime
    };
    return (
        <TextModeContext.Provider value={values}>
            {children}
        </TextModeContext.Provider>
    );
}

export const useTestMode = () => useContext(TextModeContext)