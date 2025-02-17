import React from "react";
import { Box, Text } from "@radix-ui/themes";
import CalloutText from "@/app/CalloutText";
import Headline from "@/app/components/Headline";

const content =
  "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...";

export default function ImageTextContent() {
  return (
    <Box className="col-span-3">
      <Headline title="What does cooking mean?" />

      <Text weight="light" color="gray">
        {content}
      </Text>

      <CalloutText />
    </Box>
  );
}
