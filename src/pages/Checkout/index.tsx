import { Bank, CreditCard, CurrencyDollarSimple, MapPinLine, Money } from "@phosphor-icons/react";
import { CheckoutContainer } from "./styled";
import { CartCard } from "./Cart-card";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useBuy } from "../../contexts/BuyContext";
import { Coffee } from "lucide-react";

const newAddressDeliveryFormValidationSchema = zod.object({
  cep: zod
  .number({
    required_error: "É obrigatório informar o CEP",
    invalid_type_error: "CEP must be a number",
  })
  .min(8, { message: "Informe os 8 dígitos do CEP" }),
  street: zod.string().min(1, "Informe o nome da rua"),
  streetNumber: zod.number().min(1),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod.string().min(2)
})

type NewAddressDeliveryFormData = zod.infer<typeof newAddressDeliveryFormValidationSchema>

export function Checkout(){
  const { coffeesSelected, addAddressToDelivery, addMethodPayment , totalPrice, resetCoffeesInCart } = useBuy()

  const { register, handleSubmit, reset } = useForm<NewAddressDeliveryFormData>({
    resolver: zodResolver(newAddressDeliveryFormValidationSchema),
  })

  const navigate = useNavigate()

  function handleToPageSuccess() { 
    navigate("/success")
  }

  function handleAddNewAddress(data: NewAddressDeliveryFormData){
    const newAddressDelivery = {
      cep: data.cep,
      city: data.city,
      neighborhood: data.neighborhood,
      street: data.street,
      streetNumber: data.streetNumber,
      uf: data.uf,
      complement: data.complement,
    }

    addAddressToDelivery(newAddressDelivery)
    
    reset()

    resetCoffeesInCart()

    handleToPageSuccess()
  }

  let totalCoffeePriceDisplay = totalPrice.toFixed(2).replace('.', ',')
  const totalCoffeeAndDeliveryPriceDisplay = (totalPrice + 3.50).toFixed(2).replace('.', ',')

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleAddNewAddress)} action="">
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

            <div className="address-inputs-wrapper" onSubmit={handleSubmit(handleAddNewAddress)}>
              <input type="number" placeholder="CEP" {...register("cep", { valueAsNumber: true })}/>
              <input type="text" placeholder="Rua" {...register("street")}/>

              <div className="wrapper1">
                <input type="number" placeholder="Número" {...register("streetNumber", { valueAsNumber: true })}/>
                <div>
                  <input type="text" placeholder="Complemento" {...register("complement")}/>
                  <span>Opcional</span>
                </div>
              </div>

              <div className="wrapper2">
                <input type="text" placeholder="Bairro" {...register("neighborhood")}/>
                <input type="text" placeholder="Cidade" {...register("city")}/>
                <input type="text" placeholder="UF" {...register("uf")}/>                
              </div>
            </div>
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
                <input type="radio" name="payment-option" value="credit-card" onClick={(e) => addMethodPayment(e.target.value)}/>
                <CreditCard size={16}/>
                <span>Cartão de crédito</span>
              </div>

              <div className="payment-option">
                <input type="radio" name="payment-option" value="debit-card" onClick={(e) => addMethodPayment(e.target.value)}/>
                <Bank size={16}/>
                <span>cartão de débito</span>
              </div>

              <div className="payment-option">
                <input type="radio" name="payment-option" value="money" onClick={(e) => addMethodPayment(e.target.value)}/>
                <Money size={16}/>
                <span>dinheiro</span>
              </div>
            </div>
          </section>
        </div>

        <div className="coffees-selected">
          <strong>Cafés selecionados</strong>

          <section className="cart">
            {coffeesSelected && coffeesSelected.map((coffee) => {
              return (
                <CartCard 
                data={coffee} />
              )
            })}

            {coffeesSelected.length === 0 && (
              <div className="empty-cart-message">
                <p>Ops...nada por aqui. Adicione um café para melhorar o seu dia! <Coffee size={16}/></p>      
              </div>
            )}

            <div className="cart-info">
              <div className="cart-price-info">
                <span>Total de itens</span>
                <span>R$ {totalCoffeePriceDisplay}</span>
              </div>

              <div className="cart-price-info">
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>

              <div className="cart-price-info"> 
                <strong>Total</strong>
                <strong>R$ {totalCoffeeAndDeliveryPriceDisplay}</strong>
              </div>
            </div>

            <button type="submit">CONFIRMAR PEDIDO</button>
          </section>
        </div>
      </form>
    </CheckoutContainer>
  )
}