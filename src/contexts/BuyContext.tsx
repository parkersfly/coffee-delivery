import { createContext, ReactNode, useContext, useState } from "react";

interface BuyContextProviderProps {
  children: ReactNode
}

interface CoffeeData {
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
  amountOfCoffeesToAdd: number,
  handleAddCoffeeToCart: () => void
  handleRemoveCoffeeToCart: () => void
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
  const [ amountOfCoffeesToAdd, setAmountOfCoffeesToAdd ] = useState(1)
  
  function handleAddCoffeeToCart(){
    if(amountOfCoffeesToAdd < 10){
      setAmountOfCoffeesToAdd(prevstate => prevstate + 1)
    }
  }

  function handleRemoveCoffeeToCart(){
    if(amountOfCoffeesToAdd > 1) {
      setAmountOfCoffeesToAdd(prevstate => prevstate - 1)
    }
  }

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
      addCoffeeToCart,
      coffeesSelected,
      handleAddCoffeeToCart,
      handleRemoveCoffeeToCart,
      amountOfCoffeesToAdd
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