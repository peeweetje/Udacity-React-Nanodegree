import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-family: 'Raleway', sans-serif;
}
html,
body,
.root {
  height: 100%;
}
body,
.app {
  background: #fff;
}
`;

