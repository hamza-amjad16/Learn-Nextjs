'use client';

import { signIn, signOut } from "next-auth/react";

// GitHub Login Action
export async function loginWithGithub() {
  await signIn("github");
}

// SignOut Action
export async function logout() {
  await signOut();
}
