import { Flex } from "@chakra-ui/react";
import SidePanel from "./SidePanel";
import MessagesArea from "./MessagesArea";
import { useAppSelector } from "../redux/hooks";
import { selectedUserSelector } from "../redux/appSlice";


export default function UserHomePage() {
  const selectedUser = useAppSelector(selectedUserSelector);

  return (
    <Flex direction={"row"}>
        <SidePanel />
        {selectedUser ? (
          <MessagesArea />
        ) : (
          <div></div>
        )}
      </Flex>
  );
}
