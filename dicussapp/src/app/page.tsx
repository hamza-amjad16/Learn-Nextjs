import PostList from "@/components/posts/PostList";
import { TopicCreatedForm } from "@/components/topics/TopicCreatedForm";
import { fetchTopPosts } from "@/lib/query/post";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
      <h1 className="text-xl font-bold m-2">Top Posts</h1>     
       <PostList fetchData={fetchTopPosts} />
      </div>
      <div>
       <TopicCreatedForm />
      </div>
    </div>
  );
}
