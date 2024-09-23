import { ShoppingCart, Coffee, Package, Timer } from "@phosphor-icons/react";
import { HeroContainer, HomeContainer } from "./styles";

import heroImage from '../../assets/hero-image.png'

import { coffeesInStorage } from '../../utils'

import { Card } from "./Catalog-card";
import { Icon } from "../../components/Icon";

export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <div>
          <div className="title">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </div>

          <div className="items-wrapper">
            <div>
              <div className="item">
                <Icon iconSVG={ShoppingCart} weight="fill" variant="tertiary"/>
                <span>Compra simples e segura</span>
              </div>

              <div className="item">
                <Icon iconSVG={Timer} weight="fill" variant="secondary"/>
                <span>Entrega rápida e rastreada</span>
              </div>
            </div>

            <div>
              <div className="item">
               <Icon iconSVG={Package} weight="fill" variant="quaternary"/>
                <span>Embalagem mantém o café intacto</span>
              </div>


              <div className="item">
                <Icon iconSVG={Coffee} weight="fill" />
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </div>
        </div>

        <img src={heroImage} alt="" />
      </HeroContainer>
      
      <section>
        <h3>Nossos cafés</h3>

        <div className="cards-wrapper">
        {coffeesInStorage.map((coffee) => {
          const { id, name, description, image, price, type} = coffee
          return (
            <Card 
            key={id} 
            id={id}
            name={name} 
            description={description} 
            image={image} 
            price={price} 
            type={type}/>
          )
        })}
        </div>
      </section>
    </HomeContainer>
  )
}
