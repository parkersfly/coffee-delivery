import styled from "styled-components";

export type ButtonVariants = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariants
}

const buttonVariants = {
  primary: "gray",
  secondary: "orange",
  success: "green",
  danger: "red",
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;

  background-color: ${({ variant }) => buttonVariants[variant]};
`