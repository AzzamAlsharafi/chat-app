import { User } from "../pocketbase";
import SidePanel from "./SidePanel";

interface UserHomePageProps{
    user: User
}

export default function UserHomePage({user} : UserHomePageProps){
    return (
        <>
            <SidePanel name={user.name}/>
        </>
    )
}