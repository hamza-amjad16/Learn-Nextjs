"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useActionState } from "react";
import { createPost } from "@/actions/create-post";

type createpostformprops = {
  slug: string
}

export function PostCreatedForm({slug}: createpostformprops) {
  const [formState, action] = useActionState(createPost.bind(null, slug), { errors: {} });
  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button>Create a Post</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form action={action} >
            <DialogHeader>
              <DialogTitle>Create a Post</DialogTitle>
              <DialogDescription>
                Write a new post. Click save when you are done
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div>
                <Label className="my-2" htmlFor="title">
                  Title
                </Label>
                <Input id="title" name="title" />
              </div>
              {formState.errors.title && (
                <p className="text-sm text-red-600">{formState.errors.title}</p>
              )}
              <div>
                <Label className="my-2" htmlFor="content">
                  Content
                </Label>
                <Textarea id="content" name="content" />
              </div>
              {formState.errors.content && (
                <p className="text-sm text-red-600">
                  {formState.errors.content}
                </p>
              )}
              
                 {formState.errors.formError && (
                <div className="border border-red-500 bg-red-200">
                  {formState.errors.formError}
                </div>
              )}
              

            </div>
            <DialogFooter>
              <Button className="w-full mt-4" type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
    </Dialog>
  );
}
