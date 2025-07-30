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
    <div className="m-4 p-4 border">
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src={comment.user.image || ""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <p className="text-gray-500 text-sm font-medium">
            {comment.user.name}
          </p>
          <p className="text-gray-800 ">{comment.content}</p>
          <CommentCreateForm postId={postId} parentId={comment.id} />
        </div>
      </div>
      {replyComment.map((comment) => (
        <CommentShowPage
          key={comment.id}
          postId={comment.postId}
          commentId={comment.id}
        />
      ))}
    </div>
  );
};

export default CommentShowPage;
