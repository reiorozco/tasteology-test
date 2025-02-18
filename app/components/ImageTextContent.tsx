import React from "react";
import { Box, Text } from "@radix-ui/themes";
import { CalloutText, Headline } from "@/app/components";

const content =
  "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...";

export default function ImageTextContent() {
  return (
    <Box className="md:col-span-3">
      <Headline title="What does cooking mean?" />

      <Text as="p" weight="light" color="gray" className="line-clamp-[15]">
        {content}
      </Text>

      <CalloutText />
    </Box>
  );
}
