import { prisma } from '@/lib'
import { notFound } from 'next/navigation'
import React from 'react'

type PostShowProps = {
    postid: string
}

const Postshow: React.FC<PostShowProps> = async ({postid}) => {
    await new Promise((res) => setTimeout(res, 3000))
    const post = await prisma.post.findFirst({
        where: {
            id: postid
        }
    })

    if(!post) notFound()

  return (
    <div>
        <h1 className='font-bold my-2 text-2xl'>{post.title}</h1>
        <h1 className='border rounded p-4 w-[50%] '>{post.content}</h1>
    </div>
  )
}

export default Postshow