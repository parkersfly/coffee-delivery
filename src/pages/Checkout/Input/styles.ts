import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 4.2rem;
    padding: 1.2rem;
    border-radius: 4px;
    background-color: ${({ theme }) => theme["base-input"]};
    border: 1px solid ${({ theme }) => theme["base-button"]};

    display: flex;
    align-items: center;

    &:has(input:focus){
      box-shadow: 0 0 0 2px ${({ theme }) => theme["yellow-dark"]};
    }

    input {
        width: 100%;
        height: 4.2rem;
        border-radius: 4px;
        background: transparent;
        border: none;
        box-shadow: none;    
        font-size: 1.4rem;
        color: ${({ theme }) => theme["base-label"]};
    }

    p {
      font-size: 1.2rem;
      color: ${({ theme }) => theme["base-label"]};
    }
`