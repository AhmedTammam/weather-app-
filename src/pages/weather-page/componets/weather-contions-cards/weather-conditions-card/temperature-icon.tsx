import { FC } from "react";
import { Icon } from "@chakra-ui/react";

type TemperatureIconProps = {
  color: string;
  [x: string]: any;
};

export const TemperIcon: FC<TemperatureIconProps> = ({ color, ...props }) => (
  <Icon w="70px" h="80px" mx="auto" mb="22px" color={color} {...props} />
);
