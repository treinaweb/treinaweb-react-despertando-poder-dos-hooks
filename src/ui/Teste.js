import React from 'react';

import {ThemeContext} from '../data/ThemeProvider';

export default function Teste(){
    return(
        <ThemeContext.Consumer>
            {(theme) => {
                return <h1 onClick={theme.toggle} >{theme.value}</h1>
            }}
        </ThemeContext.Consumer>
    )
}