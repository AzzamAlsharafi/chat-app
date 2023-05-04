import { Text, Heading, Stack, Spinner } from "@chakra-ui/react";

export default function LoadingPage() {
  return (
    <>
      <Stack textAlign={"center"} align={"center"} spacing={10} py={28}>
        <Heading fontWeight={"bold"} fontSize={"6xl"}>
          Loading
          <Text as={"span"} color={"blue.500"}>
            ...
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Hang on while we load your chats.
        </Text>
        <Spinner w={100} height={100} color="blue.500" thickness="8px" speed="0.6s"/>
      </Stack>
    </>
  );
}
