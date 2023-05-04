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
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  selectedMessagesSelector,
  selectedUserSelector,
  userSelector,
} from "../redux/appSlice";

export default function MessagesArea() {
  const [content, setContent] = useState("");

  const user = useAppSelector(userSelector);
  const selectedUser = useAppSelector(selectedUserSelector);
  const selectedMessages = useAppSelector(selectedMessagesSelector);

  const send = () => {
    SendMessage(content, user!.username, selectedUser);
    setContent("");
  };

  return (
    <>
      <Flex direction={"column"} h={"100%"} flex={1}>
        <Box bg={"blue.300"} w={1400} h={"100%"}>
          {selectedMessages.map((m) => (
            <MessageBubble message={m} />
          ))}
        </Box>
        <FormControl>
          <InputGroup>
            <Input
              placeholder="Type a message"
              bg={"white"}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                onClick={send}
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
