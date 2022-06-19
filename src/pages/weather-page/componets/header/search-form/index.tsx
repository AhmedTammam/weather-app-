import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useLocalStorage } from "hooks/local-storage-hook";
import { searchFormAtom } from "pages/weather-page/store/atoms";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { useRecoilState } from "recoil";

type FormInputs = {
  name: string;
};
export const SearchForm = () => {
  const [{ citiesNames, hasError }, setFormState] =
    useRecoilState(searchFormAtom);
  const { register, handleSubmit, reset } = useForm<FormInputs>();
  const [cities, setCities] = useLocalStorage("cities");
  const [term, setTerm] = useState("");

  const onSubmit = (data: FormInputs) => {
    const cityName = data.name;

    if (cities && cities.includes(cityName) && citiesNames.includes(cityName)) {
      setFormState({ citiesNames, hasError: true });
      setTerm(cityName);
      return reset();
    }

    const newCities = [...citiesNames, cityName];
    setFormState({ citiesNames: newCities, hasError: false });
    setCities(cities);
    return reset();
  };

  return (
    <Box maxW="50%" w="100%" fontFamily="sans-serif">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            // border="none"
            bg="lightgray"
            borderColor={hasError ? "red" : ""}
            border={hasError ? "1px" : ""}
            color="gray"
            placeholder="Basic usage"
            {...register("name", { required: true })}
          />
          <InputRightElement>
            <Button h="1.75rem" size="sm" type="submit">
              <Icon as={BiSearch} w="20px" h="20px" color="gray" />
            </Button>
          </InputRightElement>
        </InputGroup>

        {hasError && (
          <Text ml="4" color="red" fontSize="12px">
            City of ‘{term}’ cannot be found OR you already have
          </Text>
        )}
      </form>
    </Box>
  );
};
