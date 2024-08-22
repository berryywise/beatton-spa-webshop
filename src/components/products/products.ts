import zeroImg from "/products/zeroimg.jpg"
import firstImg from "/products/firstimg.jpg"
import secondImg from "/products/secondimg.jpg"
import thirdImg from "/products/thirdimg.jpg"
import fourthImg from "/products/fourthimg.jpg"
import fifthImg from "/products/fifthimg.jpg"
import sixthImg from "/products/sixthimg.jpg"
import seventhImg from "/products/seventhimg.jpg"
import eightImg from "/products/eightimg.jpg"



export interface ProductArr {
    id: number,
    name: string,
    description: string,
    img: string,
    price: number,
}

export const products: ProductArr[] = [
    {
       id: 0,
       name: "FRAXINUS",
       description: "Slim Console Table",
       img: zeroImg,
       price: 1299
    },
    {
        id: 1,
        name: "SALIEVO",
        description: "Chalet Natural Sofa",
        img: firstImg,
        price: 3699
     },
     {
        id: 2,
        name: "AGORA",
        description: "Mini Side Table",
        img: secondImg,
        price: 499
     },
     {
        id: 3,
        name: "GRIFFO",
        description: "Barcalona Chair",
        img: thirdImg,
        price: 1599
     },
     {
        id: 4,
        name: "ARAMDO",
        description: "Block Media Console",
        img: fourthImg,
        price: 1699
     },
     {
        id: 5,
        name: "HELENA",
        description: "Round Coffee Table",
        img: fifthImg,
        price: 1299
     },
     {
        id: 6,
        name: "MUGGO",
        description: "Mini Side Table",
        img: sixthImg,
        price: 999
     },
     {
        id: 7,
        name: "LOLITO",
        description: "Round Coffee Table",
        img: seventhImg,
        price: 1.199
     },
     {
        id: 8,
        name: "SIMONE",
        description: "Marvel Side Table",
        img: eightImg,
        price: 899
     }
]