import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function PostList() {
  const postsFetch = async () => {
    const posts = await fetch("http://localhost:3004/posts");
    return posts.json();
  };

  const { data, isLoading } = useQuery(["posts"], postsFetch);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <ul>
      {data?.map((post) => (
        <li key={post?.id}>
          <Link href={`/posts/${post.id}`}>
            <h1>{post?.title}</h1>
          </Link>
        </li>
      ))}
    </ul>
  );
}
