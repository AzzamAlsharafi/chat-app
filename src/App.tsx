import { useEffect } from "react";
import WelcomePage from "./components/WelcomePage";
import { pb } from "./pocketbase";
import HomePage from "./components/HomePage";
import { Center, Flex } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { logIn, logOut, loggedInSelector } from "./redux/appSlice";

export default function App() {
  const isLoggedIn = useAppSelector(loggedInSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pb.authStore.isValid) {
      dispatch(logIn());
    } else {
      dispatch(logOut());
    }
  }, [dispatch]);

  pb.authStore.onChange(() => {
    if (pb.authStore.isValid) {
      dispatch(logIn());
    } else {
      dispatch(logOut());
    }
  });

  return (
    <>
      <Center h={"100vh"} w="100vw" bg={"gray.500"}>
        <Flex h={"100vh"} w="100vw" maxH={"900"} maxW={"1800"}>
          {isLoggedIn ? <HomePage /> : <WelcomePage />}
        </Flex>
      </Center>
    </>
  );
}
