import React from "react";
import { Box, Flex, Grid } from "@radix-ui/themes";
import Headline from "@/app/components/Headline";
import Card from "@/app/components/Card";

const tasteTheColours = [
  {
    image: "/images/red-taste.png",
    title: "Red",
    content:
      "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
  },
  {
    image: "/images/green-taste.png",
    title: "Green",
    content:
      "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.",
  },
  {
    image: "/images/white-taste.png",
    title: "White",
    content:
      "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",
  },
];

function ThreeCardsBlock() {
  return (
    <Flex direction="column" className="p-10">
      <Box width="30%" className="self-center">
        <Headline title="Taste the colours" align="center" />
      </Box>

      <Grid columns="3" gap="2">
        {tasteTheColours.map((taste) => (
          <Card
            key={taste.title}
            title={taste.title}
            imageSrc={taste.image}
            content={taste.content}
          />
        ))}
      </Grid>
    </Flex>
  );
}

export default ThreeCardsBlock;
