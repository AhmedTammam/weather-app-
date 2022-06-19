import { Grid } from "@chakra-ui/react";
import { searchFormAtom } from "pages/weather-page/store/atoms";
import { useRecoilValue } from "recoil";

import { WeatherConditionsCard } from "./weather-conditions-card";

export const WeatherConditionsCards = () => {
  const { citiesNames } = useRecoilValue(searchFormAtom);

  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
      gap="24px"
    >
      {!!citiesNames?.length &&
        citiesNames?.map((city: string) => (
          <WeatherConditionsCard cityName={city} key={city} />
        ))}
    </Grid>
  );
};
