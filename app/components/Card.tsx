import React from "react";
import Image from "next/image";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";

interface Props {
  imageSrc: string;
  title: string;
  content: string;
}

function Card({ title, content, imageSrc }: Props) {
  return (
    <Flex direction="column" align="center" gap="5">
      <Image src={imageSrc} alt="card image" width="375" height="300" />

      <Box>
        <Heading size="4" mb="1" weight="medium" align="center">
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
