import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react";
import Swal from 'sweetalert2'

interface BuyContextProviderProps {
  children: ReactNode
}

interface Coffee {
  id: number
  image: string
  tags: string[]
  name: string
  description: string
  price: number 
  quantity: number | 1
}

interface AddressDelivery {
  cep: number,
  street: string,
  streetNumber: number,
  complement?: string,
  neighborhood: string,
  city: string,
  uf: string,
}

interface BuyContextType {
  coffeesSelected: Coffee[]
  addressDelivery: AddressDelivery
  methodPaymentSelected: string
  totalPrice: number
  addCoffeeToCart: (coffee: Coffee) => void
  addMethodPayment: (methodPayment: string) => void
  addAddressToDelivery: (data: AddressDelivery) => void
  removeCoffeeFromCart: (coffeeToRemove: number) => void
  updateCoffeeCart: (id: number, newQuantity: number) => void
  resetCoffeesInCart: () => void
}

export const BuyContext = createContext({} as BuyContextType)

function BuyContextProvider({children}: BuyContextProviderProps) {
  const [totalPrice, setTotalPrice] = useState(0)
  const [coffeesSelected, dispatch] = useReducer((state: Coffee[], action: any) => {

    if(action.type === 'Add_new_coffee') {
      return [...state, action.payload.newCoffee]
    }

    if(action.type === 'Update_coffee_cart') {
      return state.map(coffee => {
        if (coffee.id === action.payload.id) {
            return { ...coffee, quantity: action.payload.newQuantity }; 
        }
        return coffee;
      });
    }

    if(action.type === 'Remove_coffee') {
      return action.payload.newCart
    }

    if(action.type === "Reset_coffees_in_cart") {
      return action.payload
    }

    return state
  }, [])

  const [addressDelivery, setAddressDelivery] = useState<AddressDelivery>({
    cep: 0,
    street: "",
    city: "",
    neighborhood: "",
    streetNumber: 0,
    uf: "",
  })
  const [methodPaymentSelected, setMethodPaymentSelected] = useState("money")

  function addCoffeeToCart(data: Coffee){
    const newCoffee: Coffee = {
       id: data.id,
       name: data.name,
       description: data.description,
       image: data.image,
       price: data.price,
       quantity: data.quantity,
       tags: data.tags
    }

    const coffeeAlreadySelected = coffeesSelected.some((coffee: any) => coffee.id === data.id) 

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      padding: "20px",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: '<span style="font-size: 18px;">Café adicionado ao carrinho!</span>'
    });

    if(coffeeAlreadySelected) {
      return Toast.fire({
        icon: "error",
        customClass: {
          popup: "height: 90px;"
        },
        title: '<span style="font-size: 18px;">Oops...</span>',
        html: '<span style="font-size: 18px;">Café já foi adicionado ao carrinho!</span>',
      });
    }

    dispatch({
      type: "Add_new_coffee",
      payload: {
        newCoffee,
      },
    })
  }

  function updateCoffeeCart(id: number, newQuantity: number){
      dispatch({
        type: 'Update_coffee_cart',
        payload: {
          id, 
          newQuantity
        },
      })
  }

  function removeCoffeeFromCart(coffeeToRemove: number){
    const newCart = coffeesSelected.filter((coffees: Coffee) => coffees.id !== coffeeToRemove)

    dispatch({
      type: "Remove_coffee",
      payload: {
        newCart
      }
    })
  }

  function addAddressToDelivery(data: AddressDelivery){
    setAddressDelivery(data)
  }

  function resetCoffeesInCart(){
    setTotalPrice(0)

    dispatch({
      type: "Reset_coffees_in_cart",
      payload: [],
    })
  }

  function addMethodPayment(methodPayment: string){
    setMethodPaymentSelected(methodPayment)
  }

  useEffect(() => {
    function sumTotalCoffeesPrice() {
      let total = 0;
  
      coffeesSelected.forEach(coffee => {
          total += coffee.quantity * coffee.price;

          setTotalPrice(total)
      });

      console.log(total)
    }

    sumTotalCoffeesPrice()

  }, [coffeesSelected])

  return(
    <BuyContext.Provider value={{
      addressDelivery,
      addCoffeeToCart,
      coffeesSelected,
      totalPrice,
      updateCoffeeCart,
      addAddressToDelivery,
      removeCoffeeFromCart,
      addMethodPayment,
      methodPaymentSelected,
      resetCoffeesInCart
    }}>
      {children}
    </BuyContext.Provider>
  )
}

function useBuy(){
  const context = useContext(BuyContext)

  return context
}

export {
  useBuy,
  BuyContextProvider
}