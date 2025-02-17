import React from "react";
import { Heading, Separator } from "@radix-ui/themes";

interface Props {
  title: string;
  align?: "left" | "center" | "right";
}

export default function Headline({ title, align = "left" }: Props) {
  return (
    <>
      <Heading weight="light" className="uppercase" color="gray" align={align}>
        {title}
      </Heading>

      <Separator size="4" my="4" className="!bg-white" />
    </>
  );
}
