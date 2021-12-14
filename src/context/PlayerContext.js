import { createContext } from "react";

export default createContext({
    score: 0,
    playerChoice: "",
    computerChoice: "",
    setInfo: () => {},
});