import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");

export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
}

export interface Message {
  id: string,
  content: string,
  sender: string,
  receiver: string,
  created: Date
}

interface NewUserProps {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
}

export interface LoadData {
  userData: User,
  usersListData: User[],
  messagesData: Message[]
}

export async function NewUser(data: NewUserProps) {
  await pb.collection("users").create(data);

  await pb.collection("users").requestVerification(data.email);
}

export async function Login(username_email: string, password: string) {
  await pb.collection("users").authWithPassword(username_email, password);
}

export async function Logout() {
  pb.authStore.clear();
}

export async function SendMessage(content: string, sender: string, receiver: string){
  pb.collection("messages").create({content, sender, receiver})
}