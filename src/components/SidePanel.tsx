import { Box, Flex } from "@chakra-ui/react";
import NameCard from "./NameCard";
import SidePanelHeader from "./SidePanelHeader";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  messagesSelector,
  selectUser,
  selectedUserSelector,
  usersListSelector,
} from "../redux/appSlice";
import { getLatestMessage, sortUsers } from "../utils";
import format from "date-fns/format";
import { parseISO } from "date-fns";

export default function SidePanel() {
  const usersList = useAppSelector(usersListSelector);
  const messages = useAppSelector(messagesSelector);
  const selectedUser = useAppSelector(selectedUserSelector);
  const dispatch = useAppDispatch();

  const onSelect = (selected: string) => dispatch(selectUser(selected));

  return (
    <>
      {usersList && messages ? (
        sortUsers(usersList, messages).map((u) => {
          const latest = getLatestMessage(u.username, messages);
          const [subtitle, time] = latest
            ? [latest.content, format(parseISO(latest.created), "h:mm aa")]
            : ["", ""];

          return (
            <NameCard
              key={u.username}
              title={u.name}
              subtitle={subtitle}
              time={time}
              iconSrc={"src"}
              selected={selectedUser === u.username}
              onClick={() => onSelect(u.username)}
            />
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}
