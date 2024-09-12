import { userService } from "@/api";
import { useAppFetch } from "@/use";
import { useEffect } from "react";

export const AppAboutPage = () => {
  const [postList, postListLoading, postListError, getPostList] = useAppFetch(
    userService.getUserList,
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
      {postList.map(({ id, name }) => (
        <div key={id}>
          <div>{name}</div>
          <hr />
        </div>
      ))}
    </>
  );
};
