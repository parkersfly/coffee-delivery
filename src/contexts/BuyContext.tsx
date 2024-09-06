import { createContext, ReactNode, useState } from "react";

interface BuyContextProviderProps {
  children: ReactNode
}

interface CoffeeData {
  image: string
  tags: string[]
  name: string
  description: string
  price: string 
  quantity: number
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
  coffees: CoffeeData[]
}

export const BuyContext = createContext({} as BuyContextType)

export function BuyContextProvider({children}: BuyContextProviderProps) {
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
       name: data.name,
       description: data.description,
       image: data.image,
       price: data.price,
       quantity: data.quantity,
       tags: data.tags
    }

    setCoffeesSelected((state) => [...state, newCoffee])
  }

  return(
    <BuyContext.Provider value={{
      addressDelivery,
      addCoffeeToCart
    }}>
      {children}
    </BuyContext.Provider>
  )
}