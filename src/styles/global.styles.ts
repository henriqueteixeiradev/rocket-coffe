import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Manrope', sans-serif;
  }

  ${({ theme }) => css`
    html {
      font-family: 'Manrope', sans-serif;
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Manrope', sans-serif;
      background-color: ${theme.colors.backgrond};
      color: ${theme.colors.text};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export default GlobalStyle
