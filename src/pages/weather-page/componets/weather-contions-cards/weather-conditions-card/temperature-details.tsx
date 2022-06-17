import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const TemperatureDetails = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <Box>
    <Text variant="infoTitle">{title}</Text>
    <Text variant="infoSubTitle">{subtitle}</Text>
  </Box>
);
