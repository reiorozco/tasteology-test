import React from "react";
import Image from "next/image";
import { Box, Grid } from "@radix-ui/themes";
import ImageTextContent from "@/app/ImageTextContent";

function ImageTextBlock() {
  return (
    <Grid columns="10" className="p-10" gap="4">
      <Grid columns="2" rows="2" className="col-span-7" gap="2">
        <Box className="row-span-2" position="relative">
          <Image src="/images/left-image.png" alt="recipe image" fill />
        </Box>

        <Box position="relative">
          <Image src="/images/right-top-image.png" alt="recipe image" fill />
        </Box>

        <Box position="relative">
          <Image src="/images/right-bottom-image.png" alt="recipe image" fill />
        </Box>
      </Grid>

      <ImageTextContent />
    </Grid>
  );
}

export default ImageTextBlock;
