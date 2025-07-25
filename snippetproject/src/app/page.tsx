import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Snippet } from "@prisma/client";


export default async function Home() {

  const snippets = await prisma.snippet.findMany()
  return (
  <div>
    <h1 className="font-bold text-xl">Home</h1>
    <div className="flex items-center justify-between">
    <h1>Snippets</h1>
   <Link href={"/snippet/new"}><Button  className="bg-sky-500 rounded-md">New</Button></Link> 
    </div>
    <div className=" bg-gray-500 p-2 my-2 rounded-xl">
    {
      snippets.map((snippet: Snippet) => (
        <div className="flex items-center justify-between my-3 bg-gray-200 p-2 rounded-xl" key={snippet.id}>
          <h1>{snippet.title}</h1>
          <Link className="text-blue-500 " href={`/snippet/${snippet.id}`}><Button variant={"link"}>View</Button></Link>
        </div>
      ))
    }
    </div>
  </div>
  );
}
