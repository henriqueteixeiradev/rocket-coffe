import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 918px;
    margin: 5rem auto;
    height: ${theme.spacings.large};

    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const NavWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};

    & > li {
      list-style: none;
      transition: all 0.2s ease-in-out;

      a {
        color: ${theme.colors.text};
        text-decoration: none;
        font-size: ${theme.font.sizes.small};
        font-weight: bold;
        transition: all 0.2s ease-in-out;

        &:hover {
          color: ${theme.colors.button};
        }
      }
    }
  `}
`
