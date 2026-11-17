
import {
  signInWithPopup,
  signOut
} from "firebase/auth";

import { auth, googleProvider } from "./firebase";
import API from "../api/axios";

export const loginWithGoogle = async () => {
  try {
    // Step 1: Firebase Google authentication
    const result = await signInWithPopup(
      auth,
      googleProvider
    );

    const user = result.user;

    // Step 2: Get Firebase ID token
    const idToken = await user.getIdToken();

    // Step 3: Send token to backend
    const response = await API.post("/auth/google", {
      idToken
    });

    // Step 4: Save backend JWT token
    localStorage.setItem(
      "token",
      response.data.token
    );

    // Step 5: Save user details
    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    return {
      success: true,
      name: response.data.user.name,
      email: response.data.user.email,
      photo: response.data.user.profileImage,
      uid: user.uid
    };

  } catch (error) {
    console.error("Google Login Error:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);

    localStorage.removeItem("token");
    localStorage.removeItem("user");

  } catch (error) {
    console.error("Logout Error:", error);
    throw error;
  }
};
