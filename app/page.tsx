import { Flex } from "@radix-ui/themes";
import ImageTextBlock from "@/app/ImageTextBlock";
import ThreeCardsBlock from "@/app/ThreeCardsBlock";

export default function Home() {
  return (
    <Flex className="size-full" direction="column" gap="2">
      <ImageTextBlock />

      <ThreeCardsBlock />
    </Flex>
  );
}
