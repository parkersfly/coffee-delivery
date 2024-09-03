import styled from "styled-components";

export const CardContainer = styled.div`
  width: 25.6rem;
  height: 31rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme["base-card"]};

  .coffeeIMG {
    margin-top: -1.4rem;
  }

  .tags-wrapper {
    display: flex;
    gap: .4rem;

    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-weight: bold;
      padding: .4rem .8rem;
      margin-top: 1.2rem;
      height: 2.1rem;
      border-radius: 9999px;
      background-color: ${({ theme }) => theme["yellow-light"]};
      color: ${({ theme }) => theme["yellow-dark"]};
      text-transform: uppercase;
    }
  }

  .coffee-type-and-description {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: .8rem;
    margin-top: 1.6rem;

    > strong {
      font-size: 2rem;
      font-family: 'Baloo 2', sans-serif;
      color: ${({ theme }) => theme["base-subtitle"]};
    }

    > p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme["base-label"]};
    }
  }

  .price {
      display: flex;
      align-items: center;
      margin-top: 3.3rem;
      gap: 2.3rem;

      > span {
        font-size: 1.4rem;

        strong {
          font-family: 'Baloo 2', sans-serif;
          font-size: 2.4rem;
        }
      }
    }

    .buy {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .8rem;

      > button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3.8rem;
        height: 3.8rem;
        border-radius: 6px;

        background-color: ${({ theme }) => theme["purple-dark"]};

        &:focus {
          box-shadow: 0 0 0 2px ${({ theme }) => theme["purple"]};
        }

        &:hover {
          background-color:${({ theme }) => theme["purple"]};
        }
      }
    }

    .buy-count {
      width: 7.2rem;
      height: 3.8rem;
      padding: 1.2rem .8rem;
      justify-content: space-between;
      align-items: center;
      border-radius: 6px;
      display: flex;
      gap: .4rem;

      background: ${({ theme }) => theme["base-button"]};

      button {
        color: ${({ theme }) => theme.purple};
        line-height: 0;
      }
    }
`