"use client";
import React, { useActionState, useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { createComment } from "@/actions/create-comment";
import { Loader2 } from "lucide-react";
import { Input } from "../ui/input";

type CommentCreateFormProps = {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
};

const CommentCreateForm: React.FC<CommentCreateFormProps> = ({
  postId,
  parentId,
  startOpen,
}) => {
  const [open, setOpen] = useState(startOpen);
  const [formState, action, isPending] = useActionState(
    createComment.bind(null, { postId, parentId }),
    { errors: {} }
  );
  return (
   <div className="mt-2">
  <Button
    size={"sm"}
    variant={"link"}
    className="text-sm text-blue-600 hover:underline"
    onClick={() => setOpen(!open)}
  >
    Reply
  </Button>

  {open && (
    <form action={action} className="space-y-2 mt-2">
      <Input
        name="content"
        placeholder="Write a reply..."
        className="bg-gray-100 focus-visible:ring-0 w-[30%] rounded-md text-sm"
      />
      {formState.errors.content && (
        <p className="text-red-600 text-xs">{formState.errors.content}</p>
      )}
      {formState.errors.formError && (
        <div className="bg-red-100 border border-red-500 p-2 text-xs text-red-700 rounded">
          {formState.errors.formError}
        </div>
      )}

      <Button
        size={"sm"}
        variant={"secondary"}
        className="flex gap-2 items-center text-sm"
      >
        {isPending && (
          <>
            <Loader2 className="animate-spin h-4 w-4" />
            Please Wait
          </>
        )}
        {!isPending && "Save"}
      </Button>
    </form>
  )}
</div>

  );
};

export default CommentCreateForm;
