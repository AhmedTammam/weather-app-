import { extendTheme } from "@chakra-ui/react";
import { TextStyles as Text } from "./components/text-style";
import "@fontsource/poppins";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  colors: {
    dark: "#2C2C2C",
    darkgray: "#868686",
    gray: "#C4C4C4",
    lightgray: "#F8F8F8",
    sunny: "#FFC266",
    rainy: "#7E86A5",
    snow: "#7DD8FF",
    error: "#F24747",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "15px",
    lg: "30px",
    xl: "48px",
    xxl: "64px",
  },
  components: {
    Text,
  },
});
