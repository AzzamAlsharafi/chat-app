import { Button } from "@chakra-ui/react";
import { pb } from "../pocketbase";

export default function LogOutButton() {
  const logoutUser = () => {
    pb.authStore.clear();
  };

  return (
    <>
      <Button rounded={"full"} px={6} onClick={logoutUser} colorScheme="blue">
        Log Out
      </Button>
    </>
  );
}
