import React from "react";
import { Heading, Separator } from "@radix-ui/themes";

export default function Headline() {
  return (
    <>
      <Heading weight="light" className="uppercase" color="gray">
        What does cooking mean?
      </Heading>

      <Separator size="4" my="4" className="!bg-white" />
    </>
  );
}
