import { useState } from "react";
import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";

export const SearchForm = () => {
  const [error] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <Box maxW="50%" w="100%" fontFamily="sans-serif">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            // border="none"
            bg="lightgray"
            borderColor={error ? "red" : ""}
            border={error ? "1px" : ""}
            color="gray"
            placeholder="Basic usage"
            {...register("search", { required: true })}
          />
          <InputRightElement>
            <Button h="1.75rem" size="sm" type="submit">
              <Icon as={BiSearch} w="20px" h="20px" color="gray" />
            </Button>
          </InputRightElement>
        </InputGroup>

        {error && (
          <Text ml="4" color="red" fontSize="12px">
            City of ‘downtown’ cannot be found
          </Text>
        )}
      </form>
    </Box>
  );
};
