import { ButtonContainer, ButtonVariants } from "./styles";

interface ButtonProps {
  variant?: ButtonVariants
}

export function Button({ variant = 'primary'}: ButtonProps){
  return(
    <ButtonContainer variant={variant}>Teste</ButtonContainer>
  )
}