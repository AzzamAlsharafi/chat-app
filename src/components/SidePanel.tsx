import { Flex } from "@chakra-ui/react";
import NameCard from "./NameCard";
import SidePanelHeader from "./SidePanelHeader";
import { User } from "../pocketbase";

interface SidePanelProps{
  name: string,
  usersList: User[],
  onSelect: (selected: string) => void
}

export default function SidePanel({name, usersList, onSelect}: SidePanelProps) {
  return (
    <>
      <Flex direction="column">
        <SidePanelHeader name={name}/>
        {usersList.map((u) => (
          <NameCard
            key={u.username}
            title={u.name}
            subtitle={u.username}
            time={"6:00pm"}
            iconSrc={"src"}
            onClick={onSelect}
          />
        ))}
      </Flex>
    </>
  );
}
