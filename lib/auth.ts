import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export function listenToAuth(callback: any) {
  return onAuthStateChanged(auth, callback);
}