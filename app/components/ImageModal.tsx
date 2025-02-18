import React from "react";
import Image from "next/image";
import { AlertDialog, Box, Button, Flex } from "@radix-ui/themes";

interface Props {
  imageSrc: string;
}

function ImageModal({ imageSrc }: Props) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Flex justify="center">
          <Box className="cursor-pointer">
            <Image src={imageSrc} alt="recipe image" fill />
          </Box>
        </Flex>
      </AlertDialog.Trigger>

      <AlertDialog.Content>
        <AlertDialog.Title className="hidden"></AlertDialog.Title>

        <Flex position="relative" height="600px" justify="center">
          <Image
            src={imageSrc}
            alt="recipe image"
            fill
            className="object-contain"
          />
        </Flex>

        <AlertDialog.Action>
          <Flex justify="end" mt="4">
            <Button color="gray" variant="ghost">
              Close
            </Button>
          </Flex>
        </AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

export default ImageModal;
