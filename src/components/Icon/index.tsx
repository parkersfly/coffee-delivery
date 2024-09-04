import { IconContainer, IconVariants } from "./styles";

interface IconProps {
  iconSVG: any
  weight: string
  variant?: IconVariants
}

export function Icon({iconSVG: IconSVG, variant = "primary", weight }: IconProps){
  return(
    <IconContainer variant={variant}>
      <IconSVG weight={weight}/>
    </IconContainer>
  )
}