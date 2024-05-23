import { createContext } from "react";
type ThemeContextType = {
    color: string,
    toggleColor : ()=>void
} ;
const ThemeContext = createContext<ThemeContextType>({
    color:"blue",
    toggleColor:()=> {}
});
export default ThemeContext