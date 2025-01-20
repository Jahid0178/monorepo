import React from "react";

interface Props {
  params: Promise<{ id: number }>;
}

async function getPost(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "GET",
      }
    );

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

const SinglePostPage = async ({ params }: Props) => {
  const { id } = await params;
  const data = await getPost(id);

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-5xl font-semibold text-center mt-4">Post Page</h1>

        <pre className="bg-gray-200 p-4 mt-8 rounded-md">
          {JSON.stringify(data, null, 4)}
        </pre>
      </div>
    </section>
  );
};

export default SinglePostPage;
