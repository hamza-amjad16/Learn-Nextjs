import { PostCreatedForm } from "@/components/posts/PostCreateForm";
import PostList from "@/components/posts/PostList";
import { fetchPostbyTopicslug } from "@/lib/query/post";
import React from "react";

type TopicShowPageProps = {
  params: Promise<{ slug: string }>;
};

const TopicShowPage: React.FC<TopicShowPageProps> = async ({ params }) => {
  const slug = (await params).slug;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="font-bold text-xl mb-4">{slug}</h1>
        <PostList fetchData = {() => fetchPostbyTopicslug(slug)} />
      </div>
      <div className="mb-4">
        <PostCreatedForm slug={slug} />
      </div>
    </div>
  );
};

export default TopicShowPage;
