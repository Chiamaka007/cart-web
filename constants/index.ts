import flour from "../public/images/flour.jpg"
import elubo from "../public/images/elubo.jpg"
import pepper from "../public/images/pepper.jpg"


export const cartData: {
    
    title: string;
    price: string;
    image: StaticImageData;
    weight: number;
    fee: number;
    id: number;
  }[] = [
    {
      price: "17.28",
      title: "Flour",
      weight: 60,
      fee: 20.28,
      image: flour,
      id : 1
    },
    {
      price:
       "35.43",
      title: "Amala flour",
      image: elubo,
      weight: 50,
      fee: 17.28,
      id : 2
    },
    {
      price:
        "25.60",
      title: "Dry Pepper",
      image: pepper,
      weight: 15,
      fee: 10.30,
      id : 3
    },
]