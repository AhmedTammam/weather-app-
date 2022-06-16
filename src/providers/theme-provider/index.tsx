import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./theme";

export const ChakraThemeProvider = ({ children }: { children: ReactNode }) => (
  <ChakraProvider resetCSS theme={theme}>
    {children}
  </ChakraProvider>
);
