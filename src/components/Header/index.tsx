import { HeaderContainer } from "./styles";

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.png'
import { ShoppingCart } from "lucide-react";
import { Select } from "./Select";
import { Link } from "react-router-dom";

export function Header(){
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
            <Link to="/checkout">
              <ShoppingCart size={22} fill="#C47F17" color="#C47F17"/>
            </Link>
        </nav>
      </div>
    </HeaderContainer>
  )
}