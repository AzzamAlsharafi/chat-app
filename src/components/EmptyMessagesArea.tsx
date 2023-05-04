import {
  Text,
  Heading,
  Stack,
  Flex,
} from "@chakra-ui/react";

export default function EmptyMessagesArea() {
  return (
    <>
      <Flex justify={"center"} flex={1} bg={"blue.300"}>
          <Stack textAlign={"center"} align={"center"} spacing={10} py={28}>
            <Heading fontWeight={"bold"} fontSize={"6xl"}>
              Your{" "}
              <Text as={"span"} color={"blue.600"}>
                messages{" "}
              </Text>
              will apear here.
            </Heading>
            <Text color={"gray.800"} maxW={"3xl"}>
              What are you waiting for? Go chat with someone.
            </Text>
          </Stack>
      </Flex>
    </>
  );
}
