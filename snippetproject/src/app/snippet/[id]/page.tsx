import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import * as actions from "@/actions";
import { notFound } from "next/navigation";

async function SnippetDetailPage({

  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // id url sa humesa string mila ga

  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  await new Promise((r) => setTimeout(r, 2000))

  if(!snippet) return notFound()

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id)
  
  return (
    <div>
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-xl">{snippet.title}</h1>
      <div className="flex items-center gap-2">
     <Link href={`/snippet/${snippet.id}/edit`}> <Button className="bg-green-400 text-white">Edit</Button></Link>
     <form action={deleteSnippetAction}>
      <Button type="submit" className="bg-red-400 text-white">Delete</Button>
     </form>
      </div>
    </div>
      <pre className="my-4 p-3 bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export default SnippetDetailPage;
