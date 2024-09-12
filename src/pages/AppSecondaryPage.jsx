import { postService } from "@/api";
import { useAppFetch } from "@/use";
import { useState } from "react";
import { Button } from "react-bootstrap";

export const AppSecondaryPage = () => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPosBody, setNewPostBody] = useState("");

  const [newPost, newPostLoading, newPostError, createPost] = useAppFetch(
    postService.createPost,
    { title: newPostTitle, body: newPosBody, userId: 1 },
    undefined
  );

  if (newPostLoading) {
    return <h1>...loading</h1>;
  }

  if (newPostError) {
    return <h1>Error</h1>;
  }

  if (!newPost) {
    return (
      <>
        <h1> create post</h1>
        <input
          type="text"
          onChange={(e) => setNewPostTitle(e.target.value)}
          value={newPostTitle}
        />
        <input
          type="text"
          onChange={(e) => setNewPostBody(e.target.value)}
          value={newPosBody}
        />
        <Button onClick={createPost}>create post</Button>
      </>
    );
  }

  return (
    <>
      <h1>secondary page</h1>
      <div>
        <div>id: {newPost.id}</div>
        <div>title: {newPost.title}</div>
        <div>body: {newPost.body}</div>
      </div>
    </>
  );
};
