import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { CardCardContainer } from './styles'

import expresso from "../../../assets/expresso.png"

// interface CartCardProps {
//   image: string
//   name: string
//   price: string
// }

export function CartCard(/*{ image, name, price }: CartCardProps*/){
  return(
    <CardCardContainer>
        <img src={expresso} alt="" className='coffee-image' />

        <div className='card-item-info'>
          <p>Expresso Tradicional</p>

          <div className='cart-item-options'>
            <div className="add-or-remove-quantity-items">
              <button><Minus size={14}/></button>
              <span>1</span>
              <button><Plus size={14}/></button>
            </div>

            <button className='remove-item-cart'>
              <Trash size={16}/>
              remover
            </button>
          </div>
        </div>

      <div className='cart-item-price'>
        <strong>R$ 9,90</strong>
      </div>
    </CardCardContainer>
  )
}