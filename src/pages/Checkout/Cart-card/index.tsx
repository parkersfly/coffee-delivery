import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { CardCardContainer } from './styles'
import { useBuy } from '../../../contexts/BuyContext'
import { useState } from 'react'

interface CartCardProps {
  data: {
    image: string
    name: string
    price: string
    quantity: number
  }
}

export function CartCard({ data }: CartCardProps){
  const { image, name, price, quantity } = data

  const [quantityDisplay, setQuantityDisplay] = useState(quantity)

  function addCoffeeQuantity(){
    setQuantityDisplay(prevState => prevState + 1)
  }

  function removeCoffeeQuantity(){
    setQuantityDisplay(prevState => prevState - 1)
  }

  return(
    <CardCardContainer>
        <img src={image} alt="" className='coffee-image' />

        <div className='card-item-info'>
          <p>{name}</p>

          <div className='cart-item-options'>
            <div className="add-or-remove-quantity-items">
              <button type='button' onClick={() => addCoffeeQuantity()}><Minus size={14}/></button>
              <span>{quantityDisplay}</span>
              <button type='button' onClick={() => removeCoffeeQuantity()}><Plus size={14}/></button>
            </div>

            <button className='remove-item-cart'>
              <Trash size={16}/>
              remover
            </button>
          </div>
        </div>

      <div className='cart-item-price'>
      <strong>R$ {price}</strong>
      </div>
    </CardCardContainer>
  )
}