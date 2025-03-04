import React from "react";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { Card, Headline } from "@/app/components";

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
    <Flex
      direction="column"
      py={{ initial: "2", sm: "6", md: "4.5rem" }}
      pt={{ initial: "6", sm: "8", md: "4.5rem" }}
      px={{ initial: "3", sm: "8", md: "5rem" }}
    >
      <Box className="self-center">
        <Headline title="Taste the colours" align="center" />
      </Box>

      <Grid columns={{ initial: "1", sm: "3" }} gap="2">
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
