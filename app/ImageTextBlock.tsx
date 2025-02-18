import React from "react";
import { Box, Grid } from "@radix-ui/themes";
import {
  GalleryCarousel,
  ImageModal,
  ImageTextContent,
} from "@/app/components";

function ImageTextBlock() {
  return (
    <Grid
      columns={{ initial: "1", sm: "10" }}
      py={{ initial: "2", sm: "6", md: "4.5rem" }}
      px={{ initial: "3", sm: "8", md: "5rem" }}
      height={{ initial: "auto", md: "44rem" }}
      gap="4"
    >
      <Grid
        columns="2"
        rows="2"
        className="col-span-7"
        gap="2"
        display={{ initial: "none", sm: "grid" }}
      >
        <Box className="row-span-2" position="relative">
          <ImageModal imageSrc="/images/left-image.png" />
        </Box>

        <Box position="relative">
          <ImageModal imageSrc="/images/right-top-image.png" />
        </Box>

        <Box position="relative">
          <ImageModal imageSrc="/images/right-bottom-image.png" />
        </Box>
      </Grid>

      <Box display={{ initial: "block", sm: "none" }}>
        <GalleryCarousel />
      </Box>

      <ImageTextContent />
    </Grid>
  );
}

export default ImageTextBlock;
