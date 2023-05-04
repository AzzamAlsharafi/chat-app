import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import { pb } from "./pocketbase";
import HomePage from "./components/HomePage";
import { Box, Center, Flex } from "@chakra-ui/react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(pb.authStore.isValid);

  pb.authStore.onChange(() => setIsLoggedIn(pb.authStore.isValid));

  return (
    <>
      <Center h={"100vh"} w="100vw" bg={"white"}>
        <Flex h={"100vh"} w="100vw" maxH={"900"} maxW={"1800"}>
          {isLoggedIn ? <HomePage /> : <WelcomePage />}
        </Flex>
      </Center>
    </>
  );
}
