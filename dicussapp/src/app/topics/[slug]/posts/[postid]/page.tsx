import React, { Suspense } from 'react'
import Postshow from '@/components/posts/post-show'
import CommentCreateForm from '@/components/comments/comment-create-form'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import CommentList from '@/components/comments/CommentList'


type PostShowPageProps = {
  params: Promise<{slug: string, postid: string}>
}


const PostShowPage : React.FC<PostShowPageProps> = async ({params}) => {
  const {slug, postid} = (await params)
  return (
    <div className='space-y-3'>
      <Link className='flex items-center' href={`/topics/${slug}`}><ChevronLeft /> Back to {slug}</Link>
      <Suspense fallback={<p>Loading...</p>}>
      <Postshow postid = {postid} />
      </Suspense>
      <CommentCreateForm postId={postid} startOpen/>
      <CommentList postId = {postid} />
    </div>
  )
}

export default PostShowPage