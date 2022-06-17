import { Box } from "@chakra-ui/react";

import { Header } from "./componets/header";
import { WeatherConditionsCards } from "./componets/weather-contions-cards";

export const WeatherPage = () => (
  <Box>
    <Header />
    <WeatherConditionsCards />
  </Box>
);
