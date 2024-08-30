import styled from "styled-components";

import heroPattern from '../../assets/hero-pattern.png'

export const HomeContainer = styled.div`
  
`

export const HeroContainer = styled.div`
    /* background-image: url(${heroPattern}); */
    display: flex; 
    justify-content: space-between;

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
    }

    .item {
      display: flex;

      > div {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 9999px;
      }
    }
`