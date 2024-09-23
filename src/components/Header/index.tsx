import { HeaderContainer } from "./styles";

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.png'
import { ShoppingCart } from "lucide-react";
import { Select } from "./Select";
import { Link } from "react-router-dom";
import { useBuy } from "../../contexts/BuyContext";

export function Header(){
  const { coffeesSelected } = useBuy()

  const quantityOfSelectedCoffees = coffeesSelected.length

  return(
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffeeDelivery} 
        alt="Logo da coffee delivery - Um copo de café roxo com um foguete no meio na cor branca decolando e ao lado 
        direito do copo está escrito coffee e logo abaixo de coffee escrito delivery" />
      </Link>

      <div>
        <Select />

        <nav id="nav">
          <div className="cart">
            <Link to="/checkout">
              <ShoppingCart size={22} fill="#C47F17" color="#C47F17"/>
            </Link>

            { coffeesSelected.length > 0 && (
              <span>{quantityOfSelectedCoffees}</span>
            )}
          </div>
        </nav>
      </div>
    </HeaderContainer>
  )
}