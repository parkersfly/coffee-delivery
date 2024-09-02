import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { CardContainer } from './styles'

interface CardProps {
  name: string
  description: string
  type: string[]
  price: number
  image: string
}

export function Card({ name, description, image, type, price }:CardProps){
  return(
    <CardContainer>
      <div className="coffeeIMG"><img src={image} alt="" /></div>

      <div className='tags-wrapper'>
        { type.map((coffeeType) => {
          return(
            <span>{coffeeType}</span>
          )
        })}
      </div>

      <div className="coffee-type-and-description">
        <strong>{name}</strong>
        <p>{description}</p>
      </div>
      

      <div className="price">
        <span>R$ <strong>{price}</strong></span>

        <div className="buy">
          <div className="buy-count">
            <button><Minus size={14}/></button>
            <span>1</span>
            <button><Plus size={14}/></button>
          </div>

          <button>
            <ShoppingCart size={22} fill="#F3F2F2" weight="fill"/>
          </button>
        </div>
      </div>
    </CardContainer>
  )
}