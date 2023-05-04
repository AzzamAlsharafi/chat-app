import { Flex } from "@chakra-ui/react";
import SidePanel from "./SidePanel";
import MessagesArea from "./MessagesArea";
import { useAppSelector } from "../redux/hooks";
import { selectedUserSelector } from "../redux/appSlice";
import EmptyMessagesArea from "./EmptyMessagesArea";


export default function UserHomePage() {
  const selectedUser = useAppSelector(selectedUserSelector);

  return (
    <Flex direction={"row"} flex={1}>
        <SidePanel />
        {selectedUser ? (
          <MessagesArea />
        ) : (
          <EmptyMessagesArea />
        )}
      </Flex>
  );
}
