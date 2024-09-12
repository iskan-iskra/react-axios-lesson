import { postService } from "@/api";
import { useAppFetch } from "@/use";
import { useEffect } from "react";

export const AppMainPage = () => {
  const [postList, postListLoading, postListError, getPostList] = useAppFetch(
    postService.getPostList,
    undefined,
    []
  );

  useEffect(() => {
    getPostList();
  }, [getPostList]);

  if (postListLoading) {
    return <h1>...loading</h1>;
  }

  if (postListError) {
    return <h1>error</h1>;
  }

  return (
    <>
      {postList.map(({ id, title }) => (
        <div key={id}>
          <div>{title}</div>

          <hr />
        </div>
      ))}
    </>
  );
};
