import { Bank, CreditCard, CurrencyDollarSimple, MapPinLine, Money } from "@phosphor-icons/react";
import { CheckoutContainer } from "./styled";
// import { useForm } from "react-hook-form";
import { CartCard } from "./Cart-card";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";

export function Checkout(){
  // const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  function handleNextToPageSuccess() {
    navigate("/success")
  }

  return (
    <CheckoutContainer>
        <div className="complete-your-order">
          <strong>Complete seu pedido</strong>

          <section className="checkout-address-info">
            <div className="title">
              <MapPinLine size={22} color="#C47F17"/>

              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <form className="address-inputs-wrapper">
              <Input type="number" placeholder="CEP"/>
              <Input type="text" placeholder="Rua"/>

              <div className="wrapper1">
                <Input type="number" placeholder="Número"/>
                <Input type="text" placeholder="Complemento" isOptional/>
              </div>

              <div className="wrapper2">
                <Input type="text" placeholder="Bairro"/>
                <Input type="text" placeholder="Cidade"/>
                <Input type="text" placeholder="UF"/>
              </div>
            </form>
          </section>

          <section className="checkout-payment-options">
            <div className="title">
              <CurrencyDollarSimple size={22} color="#8047F8"/>
              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </div>

            <div className="payment-options">
              <div className="payment-option">
                <input type="radio" name="payment-option" value="credit-card"/>
                <CreditCard size={16}/>
                <span>Cartão de crédito</span>
              </div>

              <div className="payment-option">
                <input type="radio" name="payment-option" value="debit-card"/>
                <Bank size={16}/>
                <span>cartão de débito</span>
              </div>

              <div className="payment-option">
                <input type="radio" name="payment-option" value="money"/>
                <Money size={16}/>
                <span>dinheiro</span>
              </div>
            </div>
          </section>
        </div>

        <div className="coffees-selected">
          <strong>Cafés selecionados</strong>

          <section className="cart">
            <CartCard />
            <CartCard />

            <div className="cart-info">
              <div className="cart-price-info">
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>

              <div className="cart-price-info">
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>

              <div className="cart-price-info"> 
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </div>
            </div>

            <button onClick={() => handleNextToPageSuccess()}>CONFIRMAR PEDIDO</button>
          </section>
        </div>
    </CheckoutContainer>
  )
}