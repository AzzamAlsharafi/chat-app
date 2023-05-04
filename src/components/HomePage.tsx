import { useEffect, useState } from "react";
import { Message, User, pb } from "../pocketbase";
import LoadingPage from "./LoadingPage";
import UserHomePage from "./UserHomePage";

export default function HomePage() {
  const [userData, setUserData] = useState<User | null>(null);
  const [usersList, setUsersList] = useState<User[] | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(null);

  useEffect(() => {
    if (pb.authStore.model) {
      const userId = pb.authStore.model.id;

      const fetchData = async () => {
        const data = await pb.collection("users").getOne<User>(userId);

        const users = await pb.collection("users").getFullList<User>(
          {filter: `id!="${data.id}"`}
        );

        const messages = await pb.collection("messages").getFullList<Message>();
        
        setUserData(data)
        setUsersList(users)
        setMessages(messages)
      };

      fetchData();
    } else {
        pb.authStore.clear();
    }
  }, []);

  return (
    <>
        {userData && usersList && messages ? <UserHomePage user={userData} usersList={usersList} messages={messages}/> : <LoadingPage />}
    </>
  )
}
