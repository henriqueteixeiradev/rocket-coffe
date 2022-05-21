import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
    width: 100%;

    @media (max-width: 768px) {
      display: flex;
    }
  `}
`

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 9.5rem;
    padding: 0 2.5rem;

    border-bottom: 0.1rem solid ${theme.colors.border_menu_mobile}a1;

    @media (max-width: 280px) {
      & > svg {
        max-width: 120px;
      }
    }

    & > button {
      background-color: transparent;
      cursor: pointer;
    }
  `}
`

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(50vh - 95px);
    gap: 8.8rem;
    width: 100%;
    margin: 5rem 0;

    @media (max-width: 768px) {
      margin: 10rem 0;
    }

    @media (max-width: 320px) {
      margin: 5rem 0;
    }

    & > h1 {
      max-width: 50%;
      font-size: 3rem;
      text-align: center;

      @media (max-width: 640px) {
        font-size: 2rem;
        max-width: 80%;
      }

      @media (max-width: 280px) {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 640px) {
    }
  `}
`
