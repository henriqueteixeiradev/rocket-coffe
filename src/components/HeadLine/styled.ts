import styled, { css, keyframes } from 'styled-components'

const animeText = keyframes`
0.0%{
        color: black;
        opacity: 1;
    }
    12.2%{
        color: black;
        opacity: 0;
    }
    16.9%{
        color: black;
        opacity: 0.5;
    }
    6.2%{
        color: white;
    }
    63.6%{
        color: black;
    }
    66.0%{
        color: white;
    }
    68.2%{
        color: black;
        opacity: 0.9;
    }
    78.1%{
        color: black;
    }
    80.7%{
        color: white;
    }
    83.2%{
        color: black;
    }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 918px;
    margin: 0 auto;

    margin-top: 4rem;

    & > h2 {
      display: flex;
      flex-direction: column;
      font-size: ${theme.font.sizes.xxlarge};
      text-align: center;
      line-height: ${theme.font.sizes.xxlarge};

      @media (max-width: 768px) {
        font-size: calc(${theme.font.sizes.xxlarge} - 2rem);
      }

      @media (max-width: 450px) {
        font-size: calc(${theme.font.sizes.xxlarge} - 4rem);
      }
      @media (max-width: 280px) {
        font-size: calc(${theme.font.sizes.xxlarge} - 6rem);
        line-height: 1.5;
        margin: 5rem 0;
      }

      span {
        margin-top: 1rem;
        letter-spacing: -0.03em;
        animation: ${animeText} 3s ease 0s infinite alternate none;
        text-shadow: -1px -1px 0px ${theme.colors.button},
          -1px 1px 0px ${theme.colors.button},
          1px -1px 0px ${theme.colors.button},
          1px 0px 0px ${theme.colors.button};

        @media (max-width: 768px) {
          line-height: 0.5;
        }

        @media (max-width: 450px) {
          line-height: 0;
        }
      }
    }
  `}
`
