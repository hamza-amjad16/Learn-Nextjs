import { fetchCommentById } from "@/lib/query/comment";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import CommentCreateForm from "./comment-create-form";

type CommentShowPageProps = {
  postId: string;
  commentId: string;
};

const CommentShowPage: React.FC<CommentShowPageProps> = async ({
  postId,
  commentId,
}) => {
  const comments = await fetchCommentById(postId);

  const comment = comments.find((c) => c.id === commentId);
  if (!comment) return null;

  const replyComment = comments.filter((c) => c.parentId === commentId);
  return (
    <div className="m-4 p-4 border rounded-xl bg-white shadow-sm">
  <div className="flex gap-3">
    <Avatar className="h-10 w-10">
      <AvatarImage src={comment.user.image || ""} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <div className="flex-1 space-y-1">
      <p className="text-gray-700 font-semibold text-sm">
        {comment.user.name}
      </p>
      <p className="text-gray-800 text-sm">{comment.content}</p>
      <CommentCreateForm postId={postId} parentId={comment.id} />
    </div>
  </div>

  <div className="mt-4 pl-6 border-l-2 border-gray-200 space-y-2">
    {replyComment.map((comment) => (
      <CommentShowPage
        key={comment.id}
        postId={comment.postId}
        commentId={comment.id}
      />
    ))}
  </div>
</div>

  );
};

export default CommentShowPage;
