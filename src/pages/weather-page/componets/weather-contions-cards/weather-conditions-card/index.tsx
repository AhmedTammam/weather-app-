import { Flex, GridItem, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsSnow } from "react-icons/bs";
import { IoMdSunny, IoIosRainy } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useSetRecoilState } from "recoil";

import { GetCityByNameQuery, useGetCityByNameQuery } from "generated/graphql";
import { graphqlRequestClient } from "hooks/graphql-request-client";
import { useLocalStorage } from "hooks/local-storage-hook";
import { searchFormAtom } from "pages/weather-page/store/atoms";
import { TemperatureDetails } from "./temperature-details";
import { TemperIcon } from "./temperature-icon";

const TemperatureIcon = ({ temp }: { temp: string | null | undefined }) => {
  switch (temp) {
    case "Clouds":
      return <TemperIcon as={BsSnow} color="snow" />;
    case "Clear":
      return <TemperIcon as={IoMdSunny} color="sunny" />;
    default:
      return <TemperIcon as={IoIosRainy} color="rainy" />;
  }
};

export const WeatherConditionsCard = ({ cityName }: { cityName: string }) => {
  const [hover, setHover] = useState(false);
  const [cities] = useLocalStorage("cities");
  const setFormState = useSetRecoilState(searchFormAtom);

  const { data } = useGetCityByNameQuery<GetCityByNameQuery>(
    graphqlRequestClient,
    {
      name: cityName,
    },
    {
      enabled: !!cityName,
      onSuccess: () => {
        const newCities = cities ? [...cities, cityName] : [cityName];

        const uniqueCities = newCities.filter(
          (c, index) => newCities.indexOf(c) === index
        );
        localStorage.setItem("cities", JSON.stringify(uniqueCities));
      },
    }
  );

  if (!data) return null;
  const { getCityByName } = data;

  if (!getCityByName) return null;

  const { name, country, weather } = getCityByName;

  return (
    <GridItem w="100%">
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        minW="100%"
        bgGradient="linear(to-bl, #FAFCFE, #D0E9F6)"
        border="2px"
        borderColor={`${hover ? "red" : "#E9F4FA"}`}
        boxShadow={`${hover && "0px 0px 8px rgba(242, 71, 71, 0.37)"}`}
        borderRadius="16px"
        p="24px"
        pt="48px"
        textAlign="center"
        position="relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && (
          <Icon
            as={AiOutlineClose}
            w="16px"
            h="16px"
            mx="auto"
            mb="22px"
            color="red"
            pos="absolute"
            top="19px"
            right="19px"
            cursor="pointer"
            onClick={() => {
              const newCities = cities.filter(
                (city: string) => city !== cityName
              );

              localStorage.setItem("cities", JSON.stringify(newCities));
              setFormState({ citiesNames: newCities, hasError: false });
            }}
          />
        )}
        <TemperatureIcon temp={weather?.summary?.title} />
        <Text variant="temperature">
          {weather?.temperature?.actual}
          <span>&#176;</span>
        </Text>
        <Text variant="location" mb="16px">
          {name}, {country}
        </Text>
        <TemperatureIcon temp="h" />
        <Flex
          bg="white"
          borderRadius="8px"
          py="8px"
          px="16px"
          justifyContent="space-between"
        >
          <TemperatureDetails title="Time" subtitle="11:00 AM" />
          <TemperatureDetails
            title="Humidity"
            subtitle={weather?.clouds?.humidity}
          />
          <TemperatureDetails
            title="Wind Speed"
            subtitle={weather?.wind?.speed}
          />
          <TemperatureDetails
            title="Feels"
            subtitle={weather?.temperature?.feelsLike}
          />
        </Flex>
      </Flex>
    </GridItem>
  );
};
