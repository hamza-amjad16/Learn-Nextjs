import Editsnippet from "@/components/Editsnippet";
import { prisma } from "@/lib/prisma";
import React from "react";

async function EditPageSnippet({ params }: { params: Promise<{ id: string }> }) {
    const id = parseInt((await params).id)
    const snippet = await prisma.snippet.findUnique({
        where: {
            id
        }
    })

    if(!snippet) return <h1>Snippet not Found</h1>
  return (
    <div>
      <Editsnippet snippet={snippet} />
    </div>
  );
}

export default EditPageSnippet;
