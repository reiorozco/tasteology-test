import React from "react";
import { Heading, Separator } from "@radix-ui/themes";

interface Props {
  title: string;
  align?: "left" | "center" | "right";
}

export default function Headline({ title, align = "left" }: Props) {
  return (
    <>
      <Heading as="h1" weight="light" className="uppercase" align={align}>
        {title}
      </Heading>

      <Separator size="4" my="5" className="!bg-white" />
    </>
  );
}
