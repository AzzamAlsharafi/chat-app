import { Card, CardBody, Text } from "@chakra-ui/react";
import { Message } from "../pocketbase";
import { userSelector } from "../redux/appSlice";
import { useAppSelector } from "../redux/hooks";

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const user = useAppSelector(userSelector);

  return (
    <>
      <Card bg={user!.username === message.sender ? "blue.200" : "white"} w={"max-content"} m={2}>
        <CardBody p={2}>
          <Text>{message.content}</Text>
        </CardBody>
      </Card>
    </>
  );
}
