import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
}

export function Input({isOptional, ...rest}: InputProps){
  return(
    <InputContainer>
      <input {...rest} />
      {isOptional && <p>Opcional</p>}
    </InputContainer>
  )
}