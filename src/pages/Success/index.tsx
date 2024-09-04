import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { SuccessContainer } from "./styles";
import { Icon } from "../../components/Icon";

import delivery from '../../assets/delivery.png'

export function Success(){
  return (
    <SuccessContainer>
      <div className="order-confirmed">
        <div className="order-confirmed-title">
          <strong>Uhu! Pedido confirmado</strong>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <div className="order-cards-wrapper">
          <div className="card-order-info">
            <Icon iconSVG={MapPin} weight="fill"/>

            <div>
              <p>Entrega em <span>Rua João Daniel Martinelli, 102</span> Farrapos - Porto Alegre, RS</p>
            </div>
          </div>

          <div className="card-order-info">
            <Icon iconSVG={Timer} variant="secondary" weight="fill"/>

            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min </span>
            </div>
          </div>

          <div className="card-order-info">
          <Icon iconSVG={CurrencyDollar} variant="tertiary" weight="bold"/>

            <div>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </div>
          </div>
        </div>
      </div>

      <img src={delivery} alt="" />
    </SuccessContainer>
  )
}