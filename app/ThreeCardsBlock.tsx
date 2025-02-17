import React from "react";
import { Box, Flex, Grid } from "@radix-ui/themes";
import Headline from "@/app/components/Headline";

function ThreeCardsBlock() {
  return (
    <Flex direction="column" className="p-10 size-full">
      <Box width="25%" className="self-center">
        <Headline title="Taste the colours" align="center" />
      </Box>

      <Grid columns="3" className="h-full" gap="2">
        <Box className="red-border size-full">Card 1</Box>
        <Box className="red-border size-full">Card 2</Box>
        <Box className="red-border size-full">Card 3</Box>
      </Grid>
    </Flex>
  );
}

export default ThreeCardsBlock;
