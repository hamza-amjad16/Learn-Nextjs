import React from 'react'
import CommentShowPage from './CommentShowPage'
import { fetchCommentById } from '@/lib/query/comment'

type CommentListProps = {
    postId: string
}

const CommentList : React.FC<CommentListProps> =async ({postId}) => {
    const comment = await fetchCommentById(postId)

    // comment figure out toplevel matlab single comment or reply wala comment
    const topLevelComment = comment.filter((comment) => comment.parentId == null)
  return (
    <div>
        <h1 className='font-bold text-lg'>All 0 comments</h1>
        {
            topLevelComment.map((comment) => (
                <CommentShowPage key={comment.id} postId={comment.postId} commentId = {comment.id}   />
            ))
        }
    </div>
  )
}

export default CommentList