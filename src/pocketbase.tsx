import PocketBase, { RecordSubscription } from "pocketbase";
import { AppDispatch } from "./redux/store";
import { addMessage, addUser } from "./redux/appSlice";

export const pb = new PocketBase("http://localhost:8090");

export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
}

export interface Message {
  id: string;
  content: string;
  sender: string;
  receiver: string;
  created: string;
}

interface NewUserProps {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
}

export interface LoadData {
  userData: User;
  usersListData: User[];
  messagesData: Message[];
}

export async function NewUser(data: NewUserProps) {
  await pb.collection("users").create(data);

  await pb.collection("users").requestVerification(data.email);

  await Login(data.username, data.password)

  await pb.collection("users").create(data);

  await pb.collection("users").requestVerification(data.email);

  await Login(data.username, data.password)
}

export async function Login(username_email: string, password: string) {
  await pb.collection("users").authWithPassword(username_email, password);
}

export async function Logout() {
  pb.authStore.clear();
}

export async function SendMessage(
  content: string,
  sender: string,
  receiver: string
) {
  pb.collection("messages").create({ content, sender, receiver });
}

export async function Subscribe(dispatch: AppDispatch) {  
  pb.collection("users").subscribe("*", function (e: RecordSubscription<User>) {
    dispatch(addUser(e.record))
  });
  
  pb.collection("messages").subscribe("*", function (e: RecordSubscription<Message>) {
    dispatch(addMessage(e.record))
  });
}

export async function Unsubscribe(){
  pb.collection('users').unsubscribe();

  pb.collection('messages').unsubscribe();
}
