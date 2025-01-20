import Link from "next/link";
import React from "react";

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

const ListsPage = async () => {
  const data = await getPosts();

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-5xl font-semibold text-center mt-4">Posts Page</h1>
        <ul className="mt-4">
          {data.map(
            (post: {
              userId: number;
              id: number;
              title: string;
              body: string;
            }) => (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  {post.id}. {post.title}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default ListsPage;
