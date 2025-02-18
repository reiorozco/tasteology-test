"use client";

import React from "react";
import { Box, Heading, Text } from "@radix-ui/themes";

export default function CalloutText() {
  return (
    <Box
      mt="5"
      className="cursor-pointer"
      onClick={() => console.log("CalloutText clicked...")}
    >
      <Box className="group relative w-max">
        <Heading
          as="h4"
          size="1"
          wrap="balance"
          className="uppercase text-red-700"
          mb="2"
        >
          THE PERFECT EGG
        </Heading>

        <Box
          as="span"
          className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-700 group-hover:w-full"
        />
      </Box>

      <Text as="p" weight="bold" className="line-clamp-3">
        Keep water between 67 and 68°C for a flavourful, tender yolk
      </Text>
    </Box>
  );
}
