import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
html{
   font-size: 10px;
}
body{
    font-family: Inconsolata;
    overflow-x:hidden;
}
a{
    text-decoration: none;
}

`;

export default GlobalStyles;
