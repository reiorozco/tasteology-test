import React from "react";
import { Box, Flex, Grid, Heading } from "@radix-ui/themes";

function ThreeCardsBlock() {
  return (
    <Flex direction="column" className="p-10 size-full">
      <Heading className="red-border mb-2">Text</Heading>

      <Grid columns="3" className="h-full" gap="2">
        <Box className="red-border size-full">Card 1</Box>
        <Box className="red-border size-full">Card 2</Box>
        <Box className="red-border size-full">Card 3</Box>
      </Grid>
    </Flex>
  );
}

export default ThreeCardsBlock;
