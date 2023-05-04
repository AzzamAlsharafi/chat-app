import { Text, Heading, Stack, Center, AbsoluteCenter } from "@chakra-ui/react";
import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";

export default function WelcomePage() {
  return (
    <>
      <AbsoluteCenter flex={1} axis="horizontal">
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
            <LogInButton />
            <SignUpButton />
          </Stack>
        </Stack>
      </AbsoluteCenter>
    </>
  );
}
