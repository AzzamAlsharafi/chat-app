import { Button, Text, Heading, Stack } from "@chakra-ui/react";
import SignUpButton from "./SignUpButton";

export default function WelcomePage() {
  return (
    <>
      <Stack textAlign={"center"} align={"center"} spacing={10} py={28}>
        <Heading fontWeight={"bold"} fontSize={"6xl"}>
          Chat{" "}
          <Text as={"span"} color={"blue.500"}>
            App
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Want to chat? Use Chat App. <br />
          Log in, or register a new account.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"blue"}
          >
            Log in
          </Button>
          <SignUpButton />
        </Stack>
      </Stack>
    </>
  );
}
