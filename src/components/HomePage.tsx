import { useEffect, useState } from "react";
import { User, pb } from "../pocketbase";
import LoadingPage from "./LoadingPage";
import UserHomePage from "./UserHomePage";

export default function HomePage() {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    if (pb.authStore.model) {
      const userId = pb.authStore.model.id;

      const fetchData = async () => {
        const data = await pb.collection("users").getOne<User>(userId);
        
        console.log(data)
        
        setUserData(data)
      };

      fetchData();
    } else {
        pb.authStore.clear();
    }
  }, []);

  return (
    <>
        {userData ? <UserHomePage user={userData} /> : <LoadingPage />}
    </>
  )
}
