import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import { pb } from "./pocketbase";
import HomePage from "./components/HomePage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(pb.authStore.isValid);

  pb.authStore.onChange(() => setIsLoggedIn(pb.authStore.isValid));

  return (
    <>
      {isLoggedIn ? <HomePage /> : <WelcomePage />}
    </>
  );
}
