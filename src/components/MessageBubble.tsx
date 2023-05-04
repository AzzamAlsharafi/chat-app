import { Box, Card, CardBody, CardFooter, Text } from "@chakra-ui/react";
import { Message } from "../pocketbase";

interface MessageBubbleProps {
  user: string;
  message: Message;
}

export default function MessageBubble({ user, message }: MessageBubbleProps) {
  return (
    <>
      <Card bg={user === message.sender ? "blue.200" : "white"} w={"max-content"} m={2}>
        <CardBody p={2}>
          <Text>{message.content}</Text>
        </CardBody>
      </Card>
    </>
  );
}
