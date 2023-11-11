import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
  background-color: ${(props) => props.theme['base-background']};
  color: ${(props) => props.theme['base-title']};
  --webkit-font-smoothing: antialiased;
    font-size: 62.5%;
}

body, input, button, textarea{
  font: 400 1rem Nunito, sans-serif;
}
`;
