import styled from "styled-components";

export const CardCardContainer = styled.div`
  display: flex;
  gap: 2rem;

  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme["base-button"]};

  .coffee-image {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 9999px;

    object-fit: cover;
  }

  .add-or-remove-quantity-items,
  .remove-item-cart {
    height: 3.2rem;
    border-radius: 6px;
    background: ${({ theme }) => theme["base-button"]};
    
    display: flex;
    gap: .4rem;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.purple};
      line-height: 0;
    }
  }

  .add-or-remove-quantity-items {
    width: 7.2rem;
    padding: 1.2rem .8rem;
    justify-content: space-between;
    
    span {
      color: ${({ theme }) => theme["base-title"]};
    }   

    button {
      &:hover {
        svg {
          fill: ${({ theme }) => theme["purple-dark"]};
        }
      }
    }
  }

  .remove-item-cart {
    font-size: 1.2rem;
    padding: .8rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme["base-text"]};

    &:hover {
      background-color: ${({ theme }) => theme["base-hover"]};
      color: ${({ theme }) => theme["base-subtitle"]};
    }
  }
  
  .cart-item-options {
    display: flex;
    gap: .8rem;
  }

  .cart-item-price {
    margin-left: auto;
  }

  .card-item-info {
    display: flex;
    flex-direction: column;
    gap: .8rem;
  }
`