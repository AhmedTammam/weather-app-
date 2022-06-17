import { Flex, GridItem, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsSnow } from "react-icons/bs";
import { IoMdSunny, IoIosRainy } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

import { TemperatureDetails } from "./temperature-details";
import { TemperIcon } from "./temperature-icon";

const TemperatureIcon = ({ temp }: { temp: string }) => {
  switch (temp) {
    case "snow":
      return <TemperIcon as={BsSnow} color="snow" />;
    case "sunny":
      return <TemperIcon as={IoMdSunny} color="sunny" />;
    default:
      return <TemperIcon as={IoIosRainy} color="rainy" />;
  }
};

export const WeatherConditionsCard = () => {
  const [hover, setHover] = useState(false);
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
          />
        )}
        <TemperatureIcon temp="rainy" />
        <Text variant="temperature">
          42
          <span>&#176;</span>
        </Text>
        <Text variant="location" mb="16px">
          Dubai, UAE
        </Text>
        <Flex
          bg="white"
          borderRadius="8px"
          py="8px"
          px="16px"
          justifyContent="space-between"
        >
          <TemperatureDetails title="Time" subtitle="11:00 AM" />
          <TemperatureDetails title="Humidity" subtitle="73" />
          <TemperatureDetails title="Wind Speed" subtitle="7" />
          <TemperatureDetails title="Feels" subtitle="22" />
        </Flex>
      </Flex>
    </GridItem>
  );
};
