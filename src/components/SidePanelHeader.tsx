import { Avatar, Box, Flex, Icon, IconButton } from "@chakra-ui/react";
import { RxExit } from "react-icons/rx";
import { Logout } from "../pocketbase";
import { useAppSelector } from "../redux/hooks";
import { userSelector } from "../redux/appSlice";
import { FiMenu } from "react-icons/fi";

interface SidePanelHeaderProps{
  onOpen: () => void
}

export default function SidePanelHeader({onOpen} : SidePanelHeaderProps) {
  const user = useAppSelector(userSelector);

  return (
    <>
      <Box>
        <Flex
          bg="blue.200"
          w={{lg: 80}}
          justifyContent="space-between"
          align="center"
        >
          <IconButton
            display={{base: "flex", lg: "none"}}
            ml={2}
            onClick={onOpen}
            aria-label="open menu"
            icon={<FiMenu />}
          />
          <Avatar m={2} name={user!.name} />
          <IconButton
            bg={"blue.200"}
            m={2}
            aria-label={"logout"}
            icon={<Icon as={RxExit} color={"blue.700"} w={5} h={5} />}
            onClick={Logout}
          />
        </Flex>
      </Box>
    </>
  );
}
