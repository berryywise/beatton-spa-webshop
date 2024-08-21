import firstImg from "/products/console-table.jpg"


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
       img: firstImg,
       price: 1.299
    },
    {
        id: 1,
        name: "SALIEVO",
        description: "Chalet Natural Sofa",
        img: firstImg,
        price: 3.699
     },
     {
        id: 2,
        name: "AGORA",
        description: "Mini Side Table",
        img: firstImg,
        price: 499
     },
     {
        id: 3,
        name: "GRIFFO",
        description: "Barcalona Chair",
        img: firstImg,
        price: 1.599
     },
     {
        id: 4,
        name: "ARAMDO",
        description: "Block Media Console",
        img: firstImg,
        price: 1.699
     },
     {
        id: 5,
        name: "HELENA",
        description: "Round Coffee Table",
        img: firstImg,
        price: 1.299
     },
     {
        id: 6,
        name: "MUGGO",
        description: "Mini Side Table",
        img: firstImg,
        price: 999
     },
     {
        id: 7,
        name: "LOLITO",
        description: "Round Coffee Table",
        img: firstImg,
        price: 1.199
     },
     {
        id: 8,
        name: "SIMONE",
        description: "Marvel Side Table",
        img: firstImg,
        price: 899
     }
]