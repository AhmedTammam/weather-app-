import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }: { children: ReactNode }) => (
  <Box p="48px">{children}</Box>
);
