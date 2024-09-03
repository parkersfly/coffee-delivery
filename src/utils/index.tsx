import expresso from '../assets/expresso.png'
import americano from '../assets/americano.png'
import expressoCremoso from '../assets/expresso-cremoso.png'
import cafeGelado from '../assets/cafe-gelado.png'
import cafeComLeite from '../assets/cafe-com-leite.png'
import latte from '../assets/latte.png'
import capuccino from '../assets/capuccino.png'
import macchiato from '../assets/macchiato.png'
import mocaccino from '../assets/mochaccino.png'
import chocolateQuente from '../assets/chocolate-quente.png'
import cubano from '../assets/cubano.png'
import havaiano from '../assets/havaiano.png'
import arabe from '../assets/arabe.png'
import irlandes from '../assets/irlandes.png'

export const coffeesInStorage = [
  {
    id: 1,
    image: expresso,
    type: ["Tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    id: 2,
    image: americano,
    type: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9,90",
  },
  {
    id: 3,
    image: expressoCremoso,
    type: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9,90",
  },
  {
    id: 4,
    image: cafeGelado,
    type: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9,90",
  },
  {
    id: 5,
    image: cafeComLeite,
    type: ["Tradicional", "com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9,90",
  },
  {
    id: 6,
    image: latte,
    type: ["Tradicional", "com leite"],
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9,90",
  },
  {
    id: 7,
    image: capuccino,
    type: ["Tradicional", "com leite"],
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "9,90",
  },
  {
    id: 8,
    image: macchiato,
    type: ["Tradicional", "com leite"],
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: "9,90",
  },
  {
    id: 9,
    image: mocaccino,
    type: ["Tradicional", "com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9,90",
  },
  {
    id: 10,
    image: chocolateQuente,
    type: ["Especial", "com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "9,90",
  },
  {
    id: 11,
    image: cubano,
    type: ["Especial", "Alcoólico" ,"Gelado"],
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "9,90",
  },
  {
    id: 12,
    image: havaiano,
    type: ["Especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: "9,90",
  },
  {
    id: 13,
    image: arabe,
    type: ["Especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: "9,90",
  },
  {
    id: 14,
    image: irlandes,
    type: ["Especial", "Alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: "9,90",
  },
]