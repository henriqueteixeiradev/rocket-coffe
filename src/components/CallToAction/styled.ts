import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.1rem 3.2rem;
    border-radius: 0.6rem;
    border: 0.1rem solid ${theme.colors.button};
    background-color: transparent;
    color: ${theme.colors.text};
    font-size: 0.7rem;
    text-transform: uppercase;
    transition: background 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.button};
    }
  `}
`
