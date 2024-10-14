import styled from "styled-components";

import heroPattern from '../../assets/hero-pattern.png'

export const HomeContainer = styled.div`
  > section {
    padding: 3.2rem 0 20rem;

    .coffees-catalog {
      width: 100%;
      max-width: 112rem; 
      margin: 0 auto;

      > h3 {
        font-size: 3.2rem;
        font-family: 'Baloo 2', sans-serif;
        color: ${({ theme }) => theme["base-subtitle"]};
      }
    }

    .cards-wrapper {
      margin-top: 5.4rem;
      gap: 4rem 3.2rem;
      display: flex;
      flex-wrap: wrap;
    }
  }
`

export const HeroContainer = styled.div`
    height: 54.4rem;
    display: flex; 
    align-items: center;
    justify-content: space-between;

    background-image: url(${heroPattern});

    > div {
      width: 100%;
      max-width: 112rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }

    .hero {
      display: flex;
      flex-direction: column;
      gap: 6.6rem;
    }

    .title {
      max-width: 58.8rem;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      h1 {
        font-size: 4.8rem;
        font-weight: 800;
        font-family: 'Baloo 2', sans-serif;
        color: ${({ theme }) => theme["base-title"]};
        line-height: 130%;
      } 
  
      > p {
        font-size: 2rem;
        color: ${({ theme }) => theme["base-subtitle"]};
      }
    }

    .items-wrapper {
      display: flex;
      max-width: 56.7rem;
      justify-content: space-between;
      flex-wrap: wrap;

      > div {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }
    }

    .item {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      > div {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 9999px;

        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          width: 1.6rem;
          height: 1.6rem;
          fill: ${({ theme }) => theme.white};
        }
      }
    }

    .cartIcon {
      background-color: ${({ theme }) => theme["yellow-dark"]};
    }

    .timerIcon {
      background-color: ${({ theme }) => theme["yellow"]};
    }

    .packageIcon {
      background-color: ${({ theme }) => theme["base-text"]};
    }

    .coffeeIcon {
      background-color: ${({ theme }) => theme["purple"]};
    }
`