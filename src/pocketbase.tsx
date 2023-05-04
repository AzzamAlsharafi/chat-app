import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  name: string;
  avatar: string;
}

interface NewUserProps {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
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