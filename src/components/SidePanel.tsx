import { Flex } from "@chakra-ui/react";
import NameCard from "./NameCard";
import SidePanelHeader from "./SidePanelHeader";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectUser, selectedUserSelector, usersListSelector } from "../redux/appSlice";

export default function SidePanel() {
  const usersList = useAppSelector(usersListSelector);
  const selectedUser = useAppSelector(selectedUserSelector);
  const dispatch = useAppDispatch();

  const onSelect = (selected: string) => dispatch(selectUser(selected));

  return (
    <>
      <Flex direction="column">
        <SidePanelHeader />
        {usersList!.map((u) => (
          <NameCard
            key={u.username}
            title={u.name}
            subtitle={u.username}
            time={"6:00pm"}
            iconSrc={"src"}
            selected={selectedUser === u.username}
            onClick={() => onSelect(u.username)}
          />
        ))}
      </Flex>
    </>
  );
}
