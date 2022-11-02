import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

export default function PostDetail() {
  const router = useRouter();

  const postDetailFetch = async () => {
    const post = await fetch(`http://localhost:3004/posts/${router.query.id}`);
    return post.json();
  };

  const { data, isLoading } = useQuery(
    ["post", router.query.id],
    postDetailFetch
  );

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{data?.title}</h1>
      <h2>{data?.id}</h2>
    </div>
  );
}
