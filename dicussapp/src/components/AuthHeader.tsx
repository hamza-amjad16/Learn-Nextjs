"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import { loginWithGithub, logout } from "@/actions";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { LogOut } from "lucide-react";
import { Separator } from "./ui/separator";

function AuthHeader() {
  const session = useSession();
   if(session.status === "loading") return null

  let authContent: React.ReactNode;

  if (session.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger asChild>
          <Avatar>
            <AvatarImage src={session.data.user.image || ""} alt="github logo" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <h1 className="text-sm text-gray-400">{session.data.user.name}</h1>
          <Separator className="my-2" />
          <form action={logout}>
            <Button type="submit">
              {" "}
              <LogOut />
              Logout{" "}
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <form action={loginWithGithub}>
          <Button variant={"outline"}>Sign in</Button>
        </form>
        <form action={logout}>
          <Button>Sign out</Button>
        </form>
      </>
    );
  }
  return authContent;
}

export default AuthHeader;
