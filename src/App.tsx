import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import { pb } from "./pocketbase";
import HomePage from "./components/HomePage";
import { Center, Flex } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { logIn, logOut, loggedInSelector } from "./redux/appSlice";

export default function App() {
  const isLoggedIn = useAppSelector(loggedInSelector);
  const dispatch = useAppDispatch();

  pb.authStore.onChange(() => {
    if (pb.authStore.isValid) {
      dispatch(logIn());
    } else {
      dispatch(logOut());
    }
  });

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
