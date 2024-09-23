import { createContext, ReactNode, useContext, useState } from "react";
import Swal from 'sweetalert2'

interface BuyContextProviderProps {
  children: ReactNode
}

interface CoffeeData {
  id: number
  image: string
  tags: string[]
  name: string
  description: string
  price: string 
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
  addressDelivery: AddressDelivery
  addCoffeeToCart: (coffee: CoffeeData) => void
  coffeesSelected: CoffeeData[]
  removeCoffeeFromCart: (coffeeToRemove: number) => void
}

export const BuyContext = createContext({} as BuyContextType)

function BuyContextProvider({children}: BuyContextProviderProps) {
  const [coffeesSelected, setCoffeesSelected] = useState<CoffeeData[]>([])
  const [addressDelivery, setAddressDelivery] = useState<AddressDelivery>({
    cep: 0,
    street: "",
    city: "",
    neighborhood: "",
    streetNumber: 0,
    uf: "",
  })

  function addCoffeeToCart(data: CoffeeData){
    const newCoffee: CoffeeData = {
       id: data.id,
       name: data.name,
       description: data.description,
       image: data.image,
       price: data.price,
       quantity: data.quantity,
       tags: data.tags
    }

    const coffeeAlreadySelected = coffeesSelected.some(coffee => coffee.id === data.id) 

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

    setCoffeesSelected((state) => [...state, newCoffee])
  }

  function removeCoffeeFromCart(coffeeToRemove: number){
    const newCart = coffeesSelected.filter( coffees => coffees.id !== coffeeToRemove)

    setCoffeesSelected(newCart)
  }

  function sumTotalItems() {
    const totalQuantity = coffeesSelected.reduce((accumulator, current) => {
      const coffeePrice = parseInt(current.price, 10)
      const coffeeQuantity = current.quantity

      return (accumulator + coffeePrice) * coffeeQuantity;
  }, 0);

    // return totalQuantity
    console.log(coffeesSelected)
    console.log(totalQuantity)
  }

  sumTotalItems()

  return(
    <BuyContext.Provider value={{
      addressDelivery,
      addCoffeeToCart,
      coffeesSelected,
      removeCoffeeFromCart
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