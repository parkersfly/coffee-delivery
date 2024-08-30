import { ShoppingCart, Coffee, Package, Timer } from "@phosphor-icons/react";
import { HeroContainer, HomeContainer } from "./styles";

import heroImage from '../../assets/hero-image.png'

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
                <div><ShoppingCart size={22} weight="fill" /></div>
                <span>Compra simples e segura</span>
              </div>

              <div className="item">
                <div><Timer size={22} weight="fill" /></div>
                <span>Entrega rápida e rastreada</span>
              </div>
            </div>

            <div>
              <div className="item">
                <div><Package size={22} weight="fill" /></div>
                <span>Embalagem mantém o café intacto</span>
              </div>


              <div className="item">
                <div><Coffee size={22} weight="fill" /></div>
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </div>
        </div>

        <img src={heroImage} alt="" />
      </HeroContainer>
    </HomeContainer>
  )
}
