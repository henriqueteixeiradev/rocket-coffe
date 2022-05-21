import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 95px);
    position: absolute;
    top: 95px;
    background-color: ${theme.colors.backgrond};

    z-index: 999;

    & > ul {
      width: 100%;

      li {
        display: flex;
        align-items: center;
        width: 100%;
        height: 5.5rem;
        border-bottom: 0.1rem solid ${theme.colors.border_menu_mobile}a1;
        position: relative;

        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: ${theme.colors.text};
          font-size: ${theme.font.sizes.medium};
          opacity: 0.5;
          padding-left: 2.5rem;
          transition: all 0.2s ease-in-out;

          &:hover {
            opacity: 1;
            padding-left: 3rem;
            &::before {
              content: '';
              display: block;
              width: 0.5rem;
              height: 100%;
              background-color: ${theme.colors.button};
              position: absolute;
              top: 0;
              left: 0;
            }
          }
        }
      }
    }
  `}
`
