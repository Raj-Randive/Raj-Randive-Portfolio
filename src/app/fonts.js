import {
  Comfortaa,
  Josefin_Sans,
  Major_Mono_Display,
  Oxygen,
} from "next/font/google";

const majorMonoDisplay = Major_Mono_Display({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
const josefin_Sans = Josefin_Sans({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
const oxygen = Oxygen({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
const comfortaa = Comfortaa({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export { comfortaa, josefin_Sans, majorMonoDisplay, oxygen };
