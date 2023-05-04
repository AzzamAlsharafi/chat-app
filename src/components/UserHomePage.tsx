import {
  Box,
  Drawer,
  DrawerContent,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import SidePanel from "./SidePanel";
import MessagesArea from "./MessagesArea";
import { useAppSelector } from "../redux/hooks";
import { selectedUserSelector } from "../redux/appSlice";
import EmptyMessagesArea from "./EmptyMessagesArea";
import SidePanelHeader from "./SidePanelHeader";
import MobileDrawer from "./MobileDrawer";

export default function UserHomePage() {
  const selectedUser = useAppSelector(selectedUserSelector);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction={{ base: "column", lg: "row" }} flex={1}>
      <Flex
        direction="column"
        h={{ base: "fit-content", lg: "100%" }}
        bg={"blue.200"}
        overflow={"auto"}
      >
        <SidePanelHeader onOpen={onOpen} />
        <Box display={{ base: "none", lg: "block" }}>
          <SidePanel />
        </Box>
        <MobileDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
      {selectedUser ? <MessagesArea /> : <EmptyMessagesArea />}
    </Flex>
  );
}
