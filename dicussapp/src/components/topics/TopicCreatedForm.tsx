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
import { createTopics } from "@/actions/create-topics";
import { useActionState } from "react";

export function TopicCreatedForm() {
  const [formState, action] = useActionState(createTopics, {message: ""})
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>New Topic</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form action={action}>
          <DialogHeader>
            <DialogTitle>Create a Topic</DialogTitle>
            <DialogDescription>
             Write a new topic to start discussion 
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div>
              <Label className="my-2" htmlFor="name">Name</Label>
              <Input id="name" name="name"  />
            </div>
            <div>
              <Label className="my-2" htmlFor="description">Description</Label>
              <Textarea id="description" name="description" />
            </div>
          </div>
          <DialogFooter>
            <Button className="w-full mt-4" type="submit">Save changes</Button>
          </DialogFooter>
          </form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
