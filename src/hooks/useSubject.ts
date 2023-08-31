import React from "react";

export const useSubject = () => {
    let storageTheme = localStorage.getItem("numTheme");
    const [numTheme, setNumTheme] = React.useState(storageTheme || false)
    localStorage.setItem("numTheme", String(numTheme));


    if(numTheme === false) 
    {
        document.documentElement.style.setProperty('--colWhite_400', '#F4F4FF');
        document.documentElement.style.setProperty('--BH', 'rgba(0, 0, 0, 0.25)');
        document.documentElement.style.setProperty('--colDarck', '#000');
        document.documentElement.style.setProperty('--colWhiteBtn', '#F4F4FF');
    }

    if(numTheme === true) 
    {
        document.documentElement.style.setProperty('--colWhite_400', '#1d1f23');
        document.documentElement.style.setProperty('--BH', 'rgba(0, 0, 0, 0.60)');
        document.documentElement.style.setProperty('--colDarck', '#F4F4FF');
        document.documentElement.style.setProperty('--colWhiteBtn', '#1d1f23');
    }

    return {
        numTheme, setNumTheme
    }
}