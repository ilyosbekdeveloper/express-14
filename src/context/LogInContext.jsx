import { createContext } from "react";

const LogInContext = createContext({isLogin: false, setLogin: () => {}})

export {LogInContext}