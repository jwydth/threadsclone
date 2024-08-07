import React from "react";
import UserHeader from "../Components/UserHeader";
import UserPost from "../Components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImg="./post1.png"
        postTitle="Let's talk about threads"
      />

      <UserPost
        likes={120}
        replies={581}
        postImg="./post3.png"
        postTitle="Winter"
      />

      <UserPost
        likes={12}
        replies={181}
        postImg="./post2.png"
        postTitle="Wonyoung"
      />

      <UserPost likes={12230} replies={4801} postTitle="hehehe" />
    </>
  );
};

export default UserPage;
