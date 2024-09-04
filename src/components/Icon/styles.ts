import styled from "styled-components";

export type IconVariants = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

interface IconContainerProps {
  variant: IconVariants
}

const iconVariants = {
  primary: "#8047F8",
  secondary: "#DBAC2C",
  tertiary: "#C47F17",
  quaternary: "#574F4D",
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 9999px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ variant }) => iconVariants[variant] };

  svg {
    width: 1.6rem;
    height: 1.6rem;
    fill: ${({ theme }) => theme.white};
  }
`