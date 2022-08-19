import React, { useEffect, useContext, useState } from 'react';

/* Page Themes */
export const PAGE_THEMES = {
    primary: {
        header: { bg: "primary", variant: 'dark'},
        footer: "bg-dark text-white",
    },
    light: {
        header: { bg: "light", variant: 'light'},
        footer: "bg-light text-dark",
    },
    dark: {
        header: { bg: "dark", variant: 'dark'},
        footer: "bg-dark text-white"
    }
};

/* Create Context variables */
const ThemeContext = React.createContext();

/* Custom Hook to get current Theme value to be used in leaf component */
export function useTheme(){
    return useContext(ThemeContext);
}

/* Theme Wrapper */
export default function ThemeProvider({children}) {

    const [pageTheme, setTheme] = useState(PAGE_THEMES.primary);

    useEffect(() => {
        // Optimize Multiple events with same value
    }, [pageTheme]);

    return (
        <ThemeContext.Provider value={{pageTheme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
   
}
