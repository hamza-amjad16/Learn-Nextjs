"use server";

import { redirect } from "next/navigation";

export async function loginWithGithub() {
  redirect("/api/auth/signin/github");
}

export async function logoutUser() {
  redirect("/api/auth/signout");
}
