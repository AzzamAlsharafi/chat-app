import { Flex } from "@chakra-ui/react";
import { Message, User } from "../pocketbase";
import SidePanel from "./SidePanel";
import MessagesArea from "./MessagesArea";
import { useState } from "react";

interface UserHomePageProps {
  user: User;
  usersList: User[];
  messages: Message[]
}

export default function UserHomePage({ user, usersList, messages }: UserHomePageProps) {
  const [selectedUser, setSelectedUser] = useState<string>("");

  return (
    <>
      <Flex direction={"row"}>
        <SidePanel name={user.name} usersList={usersList} onSelect={setSelectedUser}/>
        {selectedUser ? (
          <MessagesArea
            user={user.username}
            other={selectedUser}
            messages={messages.filter((m) => m.receiver === selectedUser || m.sender === selectedUser)}
          />
        ) : (
          <div></div>
        )}
      </Flex>
    </>
  );
}
