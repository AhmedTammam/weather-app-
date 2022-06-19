import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useLocalStorage } from "hooks/local-storage-hook";
import { useRecoilState } from "recoil";

import { Header } from "./componets/header";
import { WeatherConditionsCards } from "./componets/weather-contions-cards";
import { searchFormAtom } from "./store/atoms";

export const WeatherPage = () => {
  const [{ citiesNames }, setFormState] = useRecoilState(searchFormAtom);
  const [cities] = useLocalStorage("cities");

  useEffect(() => {
    const currentCities = cities ? [...cities, ...citiesNames] : citiesNames;
    setFormState({ citiesNames: currentCities, hasError: false });
  }, [cities]);
  return (
    <Box>
      <Header />
      <WeatherConditionsCards />
    </Box>
  );
};
