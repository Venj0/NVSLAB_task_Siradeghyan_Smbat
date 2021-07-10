import { createGlobalStyle }  from "styled-components"
import { animations }         from '@vj-styles/animation'


export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    font-family: 'Roboto', "Nunito", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    background-color: ${({theme}) =>
            // @ts-ignore
            theme?.colors.pageBgc || "#0000"};
    width: 100%;
    height: 100vh;
  }

   

  *,body {
    padding: 0;
    margin: 0;
     ${animations.color};
   box-sizing: border-box;
  }

  button {
    background-color: unset;
    border: 0;
    outline: none !important;
    cursor: pointer;
    ${animations.color};
  }

  input {
    outline: none;
    border: 0;

    &[type="number"] {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
    }
  }

  a {
    text-decoration: none;
    ${animations.color};
  }

`
