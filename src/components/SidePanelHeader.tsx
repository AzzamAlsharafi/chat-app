import { Avatar, Box, Flex, Icon, IconButton } from "@chakra-ui/react";
import { RxExit } from "react-icons/rx";
import { Logout } from "../pocketbase";
import { useAppSelector } from "../redux/hooks";
import { userSelector } from "../redux/appSlice";

export default function SidePanelHeader() {
  const user = useAppSelector(userSelector);

  return (
    <>
      <Box>
        <Flex
          bg="blue.200"
          w={80}
          justifyContent="space-between"
          align="center"
        >
          <Avatar m={3} name={user!.name}/>
          <IconButton
            bg={"blue.200"}
            m={3}
            aria-label={"logout"}
            icon={<Icon as={RxExit} color={"blue.700"} w={5} h={5} />}
            onClick={Logout}
          />
        </Flex>
      </Box>
    </>
  );
}
