import React from "react";
import Image from "next/image";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

interface Props {
  imageSrc: string;
  priority?: boolean;
}

function ImageModal({ imageSrc, priority = false }: Props) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Image
          src={imageSrc}
          className="cursor-pointer"
          alt="recipe image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      </AlertDialog.Trigger>

      <AlertDialog.Content>
        <AlertDialog.Title className="hidden"></AlertDialog.Title>
        <AlertDialog.Description className="hidden"></AlertDialog.Description>

        <Flex position="relative" height="600px" justify="center">
          <Image
            src={imageSrc}
            className="object-contain"
            alt="recipe image"
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
