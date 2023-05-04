import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";

interface NameCardProps {
  title: string;
  subtitle: string;
  time: string;
  iconSrc: string;
  onClick: (selected: string) => void;
}

export default function NameCard({
  title,
  subtitle,
  time,
  iconSrc,
  onClick,
}: NameCardProps) {
  return (
    <>
      <Flex
        w={80}
        direction={"column"}
        bg={"blue.50"}
        _hover={{ bg: "blue.100" }}
        onClick={() => onClick(subtitle)}
      >
        <Flex direction="row" justify={"space-between"}>
          <Flex>
            <Avatar name={title} src={iconSrc} m={3} size="md" bg="red.500" />
            <Flex direction="column" justify="center">
              <Text fontSize="md" fontWeight="bold" noOfLines={1}>
                {title}
              </Text>
              <Text fontSize="xs" noOfLines={1} color="gray.600">
                {subtitle}
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" justify="start" align={"end"} m={2}>
            <Text fontSize="xs" color="gray.600" mt={3}>
              {time}
            </Text>
          </Flex>
        </Flex>
        <Divider />
      </Flex>
    </>
  );
}
