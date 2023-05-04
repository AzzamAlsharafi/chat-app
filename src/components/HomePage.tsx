import { useEffect } from "react";
import { Message, Subscribe, Unsubscribe, User, pb } from "../pocketbase";
import LoadingPage from "./LoadingPage";
import UserHomePage from "./UserHomePage";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loadData, messagesSelector, userSelector, usersListSelector } from "../redux/appSlice";

export default function HomePage() {
  const user = useAppSelector(userSelector);
  const usersList = useAppSelector(usersListSelector);
  const messages = useAppSelector(messagesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pb.authStore.model) {
      const userId = pb.authStore.model.id;

      const fetchData = async () => {
        const userData = await pb.collection("users").getOne<User>(userId);

        const usersListData = await pb.collection("users").getFullList<User>(
          {filter: `id!="${userData.id}"`}
        );

        const messagesData = await pb.collection("messages").getFullList<Message>();
        
        dispatch(loadData({userData, usersListData, messagesData}))
      };

      fetchData();

      Subscribe(dispatch);

      return () => {
        Unsubscribe();
      } 
    } else {
        pb.authStore.clear();
    }
  }, [dispatch]);

  return (
    <>
        {user && usersList && messages ? <UserHomePage /> : <LoadingPage />}
    </>
  )
}
