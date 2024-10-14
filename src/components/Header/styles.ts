import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 112rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.2rem 0;

  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  #nav {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 6px;

      background-color: ${({ theme }) => theme["yellow-light"]};
    }
  }

  .cart {
    position: relative;

    > span {
      content: '';

      font-size: 1.2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.white};
      
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      right: -7px;
      top: -7px;

      width: 2rem;
      height: 2rem;

      background-color: ${({ theme }) => theme["yellow-dark"]};
      border-radius: 9999px;
    }
  }
`