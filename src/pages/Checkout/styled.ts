import styled from "styled-components";

export const CheckoutContainer = styled.div`
    margin-top: 4rem;

  > form {
    display: flex;
    gap: 3.2rem;
  }

  .complete-your-order,
  .coffees-selected {
    > strong {
      font-size: 1.8rem;
      font-family: 'Baloo 2', sans-serif;
      color: ${({ theme }) => theme["base-subtitle"]};
    }
  }

  .complete-your-order {
    display: flex;
    flex-direction: column;
    max-width: 64rem;
    gap: 1.2rem;
    flex: 1;
  }

  .checkout-address-info,
  .checkout-payment-options {
    width: 100%;
    padding: 4rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme["base-card"]};

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    .title {
      display: flex;
      gap: .8rem;

      > div {
        h3 {
          font-size: 1.6rem;
          font-weight: 400;
          color: ${({ theme }) => theme["base-subtitle"]};
          line-height: 130%;

        }
    
        p {
          font-size: 1.4rem;
          line-height: 130%;
        }
      }
    }
  }

  .address-inputs-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    input {
      width: 100%;
      height: 4.2rem;
      padding: 1.2rem;
      border-radius: 4px;
      background-color: ${({ theme }) => theme["base-input"]};
      border: 1px solid ${({ theme }) => theme["base-button"]};
      box-shadow: none;    
      font-size: 1.4rem;
      color: ${({ theme }) => theme["base-label"]};

      &:focus {
        box-shadow: 0 0 0 2px ${({ theme }) => theme["yellow-dark"]};
      }
    }

    > div {
      display: flex;
      gap: 1.2rem;
    }

    div:nth-child(1){
      max-width: 20rem;
    }

    .wrapper1 {
      > div {
        width: 100%;
        display: flex;
        align-items: center;

        border-radius: 4px;
        padding: 1.2rem;

        background-color: ${({ theme }) => theme["base-input"]};
        border: 1px solid ${({ theme }) => theme["base-button"]};

        &:has(input:focus) {
          box-shadow: 0 0 0 2px ${({ theme }) => theme["yellow-dark"]};
        }

        input {
          background-color: transparent;
          border: transparent;
          height: 100%;
          padding: 0;

          &:focus {
            box-shadow: none;
          }
        }

        span {
          font-size: 1.2rem;
          color: ${({ theme }) => theme["base-label"]};
        }
      }
    }

    .wrapper2 {
      input:nth-child(3){
        flex-basis: content;
      }
    }
  }

  .payment-options {
    display: flex;
    align-items: center;
    gap: 1.2rem; 
  }

  .payment-option {
    display: flex;
    padding: 1.6rem;
    width: 17.9rem;
    text-transform: uppercase;
    position: relative;
    align-items: center;
    height: 5.1rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme["base-button"]};

    &:has(input[type="radio"]:checked){
      background-color: ${({ theme }) => theme["purple-light"]};
      box-shadow: 0 0 0 2px ${({ theme }) => theme["purple"]};
    }

    &:has(input[type="radio"]:focus){
      box-shadow: 0 0 0 2px ${({ theme }) => theme["purple"]};
    }

    &:has(input[type="radio"]:hover){
      background-color: ${({ theme }) => theme["base-hover"]};
      color: ${({ theme }) => theme["base-subtitle"]};
    }

    > input {
      all: unset;

      position: absolute;
      inset: 0; 

      cursor: pointer;
      z-index: 3;
    }

    svg {
      fill: ${({ theme }) => theme.purple};
      margin-right: 1.2rem;
    }

    span {
      font-size: 1.2rem; 
      line-height: 160%;
    }
  }

  .coffees-selected {
    width: 100%;
    max-width: 44.8rem;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  
  .cart {
    padding: 4rem;
    
    display: flex;
    gap: 2.4rem;
    flex-direction: column;

    background-color: ${({ theme }) => theme["base-card"]};
    border-radius: 6px 44px 6px 44px;

    > button {
      height: 4.6rem;
      text-transform: uppercase;
      border-radius: 6px;
      font-size: 1.4rem;
      font-weight: bold;
      padding: 1.2rem;
      background-color: ${({ theme }) => theme["yellow"]};
      color: ${({ theme }) => theme["white"]};

      &:hover {
        background-color: ${({ theme }) => theme["yellow-dark"]};
      }
    }
  }

  .cart-info {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .cart-price-info {
    display: flex;
    justify-content: space-between;

    > span:first-child{
      font-size: 1.4rem;
    }

    strong {
      font-size: 2rem;
      color: ${({ theme }) => theme["base-subtitle"]};
    }
  }
`
