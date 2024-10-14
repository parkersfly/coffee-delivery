import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  gap: 10.2rem;

  > div {
    width: 100%;
    max-width: 112rem;

    display: flex;
    align-items: start;
    justify-content: space-between;

    margin: 8rem auto 0;

    > img {
      width: 49.2rem;
      object-fit: contain;
      margin-top: 8.5rem;
    }
  }

  .order-confirmed-title {
    margin-bottom: 4rem;

    strong {
      font-size: 3.2rem;
      font-family: 'Baloo 2', sans-serif;
      color: ${({ theme }) => theme["yellow-dark"]};
    }

    p {
      color: ${({ theme }) => theme["base-subtitle"]};
      font-size: 2rem;
    }
  }

  .card-order-info {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    > div {
      span {
        font-weight: bold;
      }
    }
  }

  .order-cards-wrapper {
    width: 100%;
    max-width: 52.6rem;
    padding: 4rem;
    
    border-radius: 6px 36px 6px 36px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3.2rem;

    background:
    linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border: 1px solid transparent;
  }
`