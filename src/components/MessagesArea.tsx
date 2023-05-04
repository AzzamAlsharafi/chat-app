import {
  Box,
  Flex,
  FormControl,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SendMessage } from "../pocketbase";
import MessageBubble from "./MessageBubble";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import {
  messagesSelector,
  selectedUserSelector,
  userSelector,
} from "../redux/appSlice";

export default function MessagesArea() {
  const [content, setContent] = useState("");

  const user = useAppSelector(userSelector);
  const selectedUser = useAppSelector(selectedUserSelector);
  const messages = useAppSelector(messagesSelector);

  const selectedMessages = messages!.filter((m) => m.sender === selectedUser || m.receiver === selectedUser);

  const send = () => {
    if (content) {
      SendMessage(content, user!.username, selectedUser);
      setContent("");
    }
  };

  return (
    <>
      <Flex direction={"column"} h={"100%"} flex={1}>
        <Box bg={"blue.300"} w={1400} h={"100%"}>
          {selectedMessages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}
        </Box>
        <FormControl
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <InputGroup>
            <Input
              placeholder="Type a message"
              bg={"white"}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                type="submit"
                h="7"
                size="sm"
                icon={<Icon as={AiOutlineSend} />}
                aria-label={"send"}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Flex>
    </>
  );
}
