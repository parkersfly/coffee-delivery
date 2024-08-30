import styled from "styled-components";

export const HeaderContainer = styled.header`
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
`