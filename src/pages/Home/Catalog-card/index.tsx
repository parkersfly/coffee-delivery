import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { CardContainer } from './styles'
import { useBuy } from '../../../contexts/BuyContext'
import { useState } from 'react'

interface CardProps {
  name: string
  description: string
  type: string[]
  price: string
  image: string
}

export function Card({ name, description, image, type, price, ...rest }:CardProps){
  const { amountOfCoffeesToAdd ,addCoffeeToCart, handleAddCoffeeToCart, handleRemoveCoffeeToCart } = useBuy()
  const [ coffeeQuantity, setCoffeeQuantity] = useState(amountOfCoffeesToAdd)

  function add(){
    setCoffeeQuantity(prev => prev + 1)
  }
  
  
  return(
    <CardContainer>
      <div className="coffeeIMG"><img src={image} alt="" /></div>

      <div className='tags-wrapper'>
        {type.map((coffeeType) => {
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
            <button onClick={() => handleRemoveCoffeeToCart()}><Minus size={14}/></button>
            <span>{coffeeQuantity}</span>
            <button onClick={() => add()}><Plus size={14}/></button>
          </div>

          <button onClick={() => addCoffeeToCart({name, description, image, price, tags: type, quantity: amountOfCoffeesToAdd})} {...rest}>
            <ShoppingCart size={22} fill="#F3F2F2" weight="fill"/>
          </button>
        </div>
      </div>
    </CardContainer>
  )
}