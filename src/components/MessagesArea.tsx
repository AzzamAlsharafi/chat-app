import {
  Box,
  Container,
  Flex,
  FormControl,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Message, SendMessage } from "../pocketbase";
import MessageBubble from "./MessageBubble";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";

interface MessagesAreaProps {
  user: string;
  other: string;
  messages: Message[];
}

export default function MessagesArea({
  user,
  other,
  messages,
}: MessagesAreaProps) {
    const [content, setContent] = useState('');

  const send = () => {
    SendMessage(content, user, other);
    setContent('');
  }
  
    return (
    <>
      <Flex direction={"column"} h={"100vh"}>
        <Box bg={"blue.300"} w={1400} h={"100%"}>
          {messages.map((m) => (
            <MessageBubble user={user} message={m} />
          ))}
        </Box>
        <FormControl>
          <InputGroup>
            <Input placeholder="Type a message" value={content} onChange={(e) => setContent(e.target.value)}/>
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
