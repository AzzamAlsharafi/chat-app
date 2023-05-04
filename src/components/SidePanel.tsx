import { Flex } from "@chakra-ui/react";
import NameCard from "./NameCard";
import SidePanelHeader from "./SidePanelHeader";

const users = [
  {
    title: "Azzam Alsharafi",
    subtitle: "Hello, good morning",
    time: "4:00pm",
    iconSrc: "",
  },
  {
    title: "Azzam Alsharafi",
    subtitle: "Hello, good morning",
    time: "4:00pm",
    iconSrc: "",
  },
  {
    title: "Mohammed Ahmed",
    subtitle: ".",
    time: "6:00pm",
    iconSrc: "",
  },
  {
    title: "Azzam Alsharafi",
    subtitle: "Hello, good morning",
    time: "4:00pm",
    iconSrc: "",
  },
  {
    title: "Azzam Alsharafi",
    subtitle: "Hello, good morning",
    time: "4:00pm",
    iconSrc: "",
  },
  {
    title: "Mohammed Ahmed",
    subtitle: ".",
    time: "6:00pm",
    iconSrc: "",
  },
  {
    title: "Azzam Alsharafi",
    subtitle: "Hello, good morning",
    time: "4:00pm",
    iconSrc: "",
  },
  {
    title: "Azzam Alsharafi",
    subtitle: "Hello, good morning",
    time: "4:00pm",
    iconSrc: "",
  },
  {
    title: "Mohammed Ahmed",
    subtitle: ".",
    time: "6:00pm",
    iconSrc: "",
  },
  {
    title: "Azzam Alsharafi",
    subtitle: "Hello, good morning",
    time: "4:00pm",
    iconSrc: "",
  },
  {
    title: "Mohammed Ahmed",
    subtitle: ".",
    time: "6:00pm",
    iconSrc: "",
  },
  {
    title: "Azzam Alsharafi",
    subtitle: "Hello, good morning",
    time: "4:00pm",
    iconSrc: "",
  },
  {
    title: "Mohammed Ahmed",
    subtitle: ".",
    time: "6:00pm",
    iconSrc: "",
  },
];

interface SidePanelProps{
  name: string
}

export default function SidePanel({name}: SidePanelProps) {
  return (
    <>
      <Flex direction="column">
        <SidePanelHeader name={name}/>
        {users.map((u) => (
          <NameCard
            key={u.title}
            title={u.title}
            subtitle={u.subtitle}
            time={u.time}
            iconSrc={u.iconSrc}
          />
        ))}
      </Flex>
    </>
  );
}
