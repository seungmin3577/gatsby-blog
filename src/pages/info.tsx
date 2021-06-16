import React from "react";
import { graphql } from "gatsby";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import Text from "components/Text";

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
  }
`;

const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`;

const DescriptionText = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? "line-through" : "none")};
`;

const AuthorText = styled(`div`)(() => ({
  fontSize: "15px",
  color: "blue",
}));

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

const InfoPage = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: InfoPageProps) => {
  return (
    <div>
      <Global styles={globalStyle} />
      <Text text={title} />
      <DescriptionText disable={true}>{description}</DescriptionText>
      <AuthorText>{author}</AuthorText>
    </div>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
