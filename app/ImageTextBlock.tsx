import React from "react";
import { Box, Grid } from "@radix-ui/themes";

function ImageTextBlock() {
  return (
    <Grid columns="10" className="p-10 size-full" gap="4">
      <Grid columns="2" rows="2" className="col-span-6" gap="2">
        <Box className="red-border row-span-2 size-full">Image 1</Box>

        <Box className="red-border size-full">Image 2</Box>

        <Box className="red-border size-full">Image 3</Box>
      </Grid>

      <Box className="col-span-4 red-border">Text</Box>
    </Grid>
  );
}

export default ImageTextBlock;
