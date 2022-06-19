import { Box, Text } from "@chakra-ui/react";

export const TemperatureDetails = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: number | string | null | undefined;
}) => (
  <Box>
    <Text variant="infoTitle">{title}</Text>
    <Text variant="infoSubTitle">{subtitle}</Text>
  </Box>
);
