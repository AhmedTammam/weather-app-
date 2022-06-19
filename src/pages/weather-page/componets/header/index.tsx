import { Flex, Text } from "@chakra-ui/react";

import { SearchForm } from "./search-form";

export const Header = () => (
  <Flex
    justifyContent="space-between"
    flexDirection={["column", "row"]}
    alignItems="center"
    mb={["8px", "48px"]}
  >
    <Text variant="logo">Weather</Text>
    <SearchForm />
  </Flex>
);
