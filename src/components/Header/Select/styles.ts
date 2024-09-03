import styled from "styled-components";

export const SelectContainer = styled.div`
  #select-button {
    height: 3.8rem;
    padding: 0 1.6rem;

    display: flex;
    gap: .4rem;
    align-items: center;
    justify-content: space-between;

    border-radius: 6px;
    background-color: ${({ theme }) => theme["purple-light"]};
  }
  
  #selected-value {
    font-size: 1.4rem;
    color: ${({ theme }) => theme["purple-dark"]};
  }

  #state-select {
    position: relative;
  }

  #state-select:has(input:focus){
    box-shadow: 0 0 0 2px ${({ theme }) => theme["purple-dark"]};
    border-radius: 6px;
  }

  #options {
    display: none;

    position: absolute;

    margin-top: .4rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.purple};
    background-color: ${({ theme }) => theme["purple-light"]};
  }

  #options-view-button {
    all: unset;

    position: absolute;
    inset: 0;

    cursor: pointer;
    z-index: 3;
  }

  .option {
    height: 3.8rem;
    display: flex;
    padding: 0 1.6rem;
    align-items: center;
    gap: .4rem;

    color: ${({ theme }) => theme["purple-dark"]};
    font-size: 1.4rem;
    
    position: relative;
    
  }
  
  .option + .option {
    border-top: 1px solid ${({ theme }) => theme["purple-dark"]};
  }

  .option:has(input:hover),
  .option:has(input:focus) {
    background: ${({ theme }) => theme["purple-dark"]};
    color: ${({ theme }) => theme.white};
  }

  .option input[type="radio"] {
    all: unset;

    position: absolute;
    inset: 0;

    cursor: pointer;
  }

  #state-select[data-open-select="true"]+ #options {
    display: block;
  }
`