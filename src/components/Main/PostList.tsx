import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { useInfiniteScroll } from "hooks";
import { PostItem } from "components/Main";
import { FluidObject } from "gatsby-image";

const POST_ITEM_DATA = {
  title: "Post Item Title",
  date: "2020.01.29.",
  categories: ["Web", "Frontend", "Testing"],
  summary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!",
  thumbnail:
    "https://avatars.githubusercontent.com/u/39826784?s=400&u=194a4e827f507ced2daec42314b4808cda244f34&v=4",
  link: "<https://www.google.co.kr/>",
};

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

export type PostType = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      summary: string;
      date: string;
      categories: string[];
      thumbnail: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
  };
};

interface PostListProps {
  selectedCategory: string;
  posts: PostType[];
}

const PostList = ({ posts, selectedCategory }: PostListProps) => {
  const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts);

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(({ node: { id, frontmatter } }: PostType) => (
        <PostItem
          {...frontmatter}
          link="<https://www.google.co.kr/>"
          key={id}
        />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
