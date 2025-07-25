"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState } from "react";
import * as actions from "@/actions"

function CreateSnippet() {
  const [formStateData, action ] = useActionState(actions.createSnippet, {message: ""} )

  

  return (
    <form action={action}>
      <div className="flex flex-col gap-4">
      <div>
        <Label>Title</Label>
        <Input className="w-[50%] " type="text" name="title" id="title" />
      </div>
      <div>
        <Label>Code</Label>
        <Textarea className="w-[50%]" name="code" id="code" />
      </div>
      {formStateData.message && (
         <div className="bg-red-300 border-2 border-red-600 mt-2 w-[50%]">{formStateData.message}</div>
      ) }
     
      <Button type="submit" className="my-4 w-[10%]  rounded-md bg-sky-500">New</Button>
      </div>
    </form>
  );
}

export default CreateSnippet;
