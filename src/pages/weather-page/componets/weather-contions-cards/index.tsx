import { Grid } from "@chakra-ui/react";
import { WeatherConditionsCard } from "./weather-conditions-card";

export const WeatherConditionsCards = () => (
  <Grid
    templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
    gap="24px"
  >
    <WeatherConditionsCard />
  </Grid>
);
