import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";

interface Props {
  imageSrc: string;
  title: string;
  content: string;
}

function Card({ title, content, imageSrc }: Props) {
  return (
    <Flex direction="column" align="center" gap="5">
      <Box className="w-full relative max-w-sm mx-auto h-auto">
        <Image
          src={imageSrc}
          alt="card image"
          width="375"
          height="300"
          className="w-full max-w-sm mx-auto h-auto relative z-0"
        />

        <Link
          href="#"
          className="absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-15"
        />
      </Box>

      <Box>
        <Heading as="h6" size="4" mb="1" weight="medium" align="center">
          {title}
        </Heading>

        <Text as="p" color="gray" align="center">
          {content}
        </Text>
      </Box>
    </Flex>
  );
}

export default Card;
