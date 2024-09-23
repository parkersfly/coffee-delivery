import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { CardCardContainer } from './styles'
import { useState } from 'react'
import { useBuy } from '../../../contexts/BuyContext'

interface CartCardProps {
  data: {
    id: number
    image: string
    name: string
    price: string
    quantity: number
  }
}

export function CartCard({ data }: CartCardProps){
  const { id, image, name, price, quantity } = data

  const { removeCoffeeFromCart } = useBuy()

  const [quantityDisplay, setQuantityDisplay] = useState(quantity)

  function addCoffeeQuantity(){
    if(quantityDisplay < 10){
      setQuantityDisplay(prevState => prevState + 1)
    }
  }

  function removeCoffeeQuantity(){
    if(quantityDisplay > 1){
      setQuantityDisplay(prevState => prevState - 1)
    }
  }

  return(
    <CardCardContainer>
        <img src={image} alt="" className='coffee-image' />

        <div className='card-item-info'>
          <p>{name}</p>

          <div className='cart-item-options'>
            <div className="add-or-remove-quantity-items">
              <button type='button' onClick={() => removeCoffeeQuantity()}><Minus size={14}/></button>
              <span>{quantityDisplay}</span>
              <button type='button' onClick={() => addCoffeeQuantity()}><Plus size={14}/></button>
            </div>

            <button type='button' onClick={() => removeCoffeeFromCart(id)} className='remove-item-cart'>
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