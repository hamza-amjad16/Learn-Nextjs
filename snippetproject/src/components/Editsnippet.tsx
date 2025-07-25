"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import type { Snippet } from "@prisma/client";
import { Button } from "./ui/button";
import {SaveSnippet} from "@/actions"

function Editsnippet({ snippet }: { snippet: Snippet }) {
    const [code, setCode] = useState(snippet.code);
    const changeEventHandler = (value: string = "") => {
        setCode(value)
    }
    // we can't use "use server" directly in client component

    const saveSnippetAction = SaveSnippet.bind(null, snippet.id, code)
  return (
    <div className="flex flex-col gap-4">
      <form action={saveSnippetAction} className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Your Code Editor:</h1>
        <Button type="submit" className="bg-black text-white rounded-md ">
          Save
        </Button>
      </form>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={changeEventHandler}
      />
    </div>
  );
}

export default Editsnippet;
