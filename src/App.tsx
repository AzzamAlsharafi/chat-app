import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import { pb } from "./pocketbase";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(pb.authStore.isValid);

  pb.authStore.onChange(() => setIsLoggedIn(pb.authStore.isValid));

  return (
    <>
      {isLoggedIn ? <div /> : <WelcomePage />}
    </>
  );
}
