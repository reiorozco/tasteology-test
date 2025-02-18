import React from "react";
import Image from "next/image";
import { Box, Grid } from "@radix-ui/themes";
import ImageTextContent from "@/app/ImageTextContent";
import GalleryCarousel from "@/app/components/GalleryCarousel";

function ImageTextBlock() {
  return (
    <Grid
      columns={{ initial: "1", md: "10" }}
      py={{ initial: "2", sm: "4", md: "4.5rem" }}
      px={{ initial: "3", sm: "6", md: "5rem" }}
      height={{ initial: "auto", lg: "44rem" }}
      gap="4"
    >
      <Grid
        columns="2"
        rows="2"
        className="col-span-7"
        gap="2"
        display={{ initial: "none", md: "grid" }}
      >
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

      <Box display={{ initial: "block", md: "none" }}>
        <GalleryCarousel />
      </Box>

      <ImageTextContent />
    </Grid>
  );
}

export default ImageTextBlock;
