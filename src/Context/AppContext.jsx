import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
    const [even, setEven] = useState(false);
    return <AppContext.Provider value={{ even, setEven }}> {children}</AppContext.Provider>;
};

export default AppContextProvider;
