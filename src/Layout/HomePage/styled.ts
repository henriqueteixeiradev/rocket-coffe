import styled, { css } from 'styled-components'

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;

    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background: url('/img/blur-1.png'), url('/img/blur-2.png'),
      ${theme.colors.backgrond};

    background-repeat: no-repeat, no-repeat;
    background-position: bottom left, top right;

    @media (max-width: 768px) {
      background-image: url('/img/blur-1.png');
    }
  `}
`
