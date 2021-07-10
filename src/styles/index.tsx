import React, { FC } from 'react'
import { theme }           from "@vj-styles/theme";
import { ThemeProvider }   from 'styled-components';
import { GlobalStyle }     from "@vj-styles/global";

interface iProps{
}

export const StyleProvider: FC<iProps> =  ({children})=>
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    {children}
  </ThemeProvider>
