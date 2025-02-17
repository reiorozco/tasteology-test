import React from "react";
import { Box, Heading, Text } from "@radix-ui/themes";

export default function CalloutText() {
  return (
    <Box mt="5">
      <Heading
        size="1"
        wrap="balance"
        className="uppercase text-red-700"
        mb="2"
      >
        THE PERFECT EGG
      </Heading>

      <Text weight="bold">
        Keep water between 67 and 68°C for a flavourful, tender yolk
      </Text>
    </Box>
  );
}
