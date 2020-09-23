import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*,::after,::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #000;
    
}

html{
    font-family: 'Kumbh Sans', sans-serif;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #000;
}

::-webkit-scrollbar-thumb {
  background: #03fc1c;
}

::-webkit-scrollbar-thumb:hover {
  background: #03fc1c;
}

`