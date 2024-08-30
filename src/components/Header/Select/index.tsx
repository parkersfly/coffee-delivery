import { useState } from 'react'
import { SelectContainer } from './styles'

import { MapPin } from "@phosphor-icons/react"

export function Select(){
  const [openSelect, setOpenSelect] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState("Selecione a localização") 

  function handleSelectLocation(location: string){
    setSelectedLocation(location)
    setOpenSelect(false)
  }

  function handleOpenSelect(){
    setOpenSelect(!openSelect)
  }

  return(
    <SelectContainer>
          <div id="state-select" data-open-select={openSelect}>
            <input type="checkbox" id="options-view-button" onClick={() => handleOpenSelect()}/>  

            <div id="select-button">
              <MapPin size={22} weight="fill" color="#8047F8"/>
              <p id="selected-value">{selectedLocation}</p>
            </div>
          </div>

          <ul id="options">
            <li className="option">
              <input 
                type="radio" 
                name="state" 
                value="brasiliaDF" 
                onClick={() => handleSelectLocation("Brasília, DF")}
              />

              <span>Brasília, DF</span>
            </li>

            <li className="option">
              <input 
                type="radio" 
                name="state" 
                value="florianopolisSC" 
                onClick={() => handleSelectLocation("Florianópolis, SC")}
              />

              <span>Florianópolis, SC</span>
            </li>
          </ul>
    </SelectContainer>
  )
}