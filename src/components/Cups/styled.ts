import styled, { css, keyframes } from 'styled-components'

const animeCoffe1 = keyframes`
  0% {
    transform: scale(1);
    transform: rotate(0deg);
  } 30% {
    transform: scale(1.5);
    transform: rotate(3deg);
  } 60% {
    transform: scale(1.2);
  } 100% {
    transform: scale(1);
    transform: rotate(0deg);
  }
`

const animeCoffe2 = keyframes`
  0% {
    transform: scale(1);
    transform: rotate(0deg);
  } 30% {
    transform: scale(1.3);
    transform: rotate(3deg);
  } 60% {
    transform: scale(1.1);
  } 100% {
    transform: scale(1);
    transform: rotate(0deg);
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
    position: relative;
  `}
`
export const CupsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    max-width: 737.55px;
    z-index: 1;
  `}
`
export const CoffeLeftWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 210px;
    left: 20px;
    max-width: 140.16px;
    animation: ${animeCoffe1} 2s alternate infinite;
    z-index: 2;

    @media (max-width: 768px) {
      top: 100px;
      left: 10px;
    }

    @media (max-width: 450px) {
      max-width: 40.16px;
      top: 60px;
    }

    @media (max-width: 250px) {
      top: 40px;
      left: 0px;
    }
  `}
`
export const CoffeRightWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 130px;
    right: 100px;
    max-width: 176.55px;
    animation: ${animeCoffe2} 2s alternate infinite;
    z-index: 2;

    @media (max-width: 768px) {
      top: 20px;
      right: 40px;
    }

    @media (max-width: 450px) {
      top: 50px;
      right: 40px;
      max-width: 76.55px;
    }

    @media (max-width: 250px) {
      top: 10px;
      right: 0px;
    }
  `}
`
