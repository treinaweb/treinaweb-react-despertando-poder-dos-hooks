import React from 'react';

export const themes = {
    light: 'white',
    dark: 'black'
}

export const ThemeContext = React.createContext(themes.light);