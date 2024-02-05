import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Duck",
    src: photo1,
    photographer: "Known",
    location: "Kinia",
  },
  {
    id: "2",
    name: "Cat",
    src: photo2,
    photographer: "Known",
    location: "Sudan",
  },
  {
    id: "3",
    name: "Crocodail",
    src: photo3,
    photographer: "Known",
    location: "South Sudan",
  },
  {
    id: "4",
    name: "Car",
    src: photo4,
    photographer: "Known",
    location: "UAE",
  },
  {
    id: "5",
    name: "Dog",
    src: photo5,
    photographer: "Known",
    location: "Uganda",
  },
  {
    id: "6",
    name: "Tawoos",
    src: photo6,
    photographer: "Known",
    location: "Saudi Arebia",
  },
];

export default wondersImages;
