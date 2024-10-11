import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { SuccessContainer } from "./styles";
import { Icon } from "../../components/Icon";

import delivery from '../../assets/delivery.png'
import { useBuy } from "../../contexts/BuyContext";

export function Success(){
  const { addressDelivery, methodPaymentSelected } = useBuy() 

  const { street, streetNumber, neighborhood, city, uf } = addressDelivery

  function methodPaymentFormatedForText(methodPayment: string){
    switch(methodPayment) {
      case 'credit-card':
        return "Cartão de Crédito";

      case 'debit-card':
        return "Cartão de Débito";

      case 'money':
        return "Dinheiro";

      default: 
        return "Dinheiro";
    }
  }

  const methodPaymentFormated = methodPaymentFormatedForText(methodPaymentSelected)

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
              <p>Entrega em <span>{street}, {streetNumber}</span> {neighborhood} - {city}, {uf}</p>
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
              <span>{methodPaymentFormated}</span>
            </div>
          </div>
        </div>
      </div>

      <img src={delivery} alt="" />
    </SuccessContainer>
  )
}