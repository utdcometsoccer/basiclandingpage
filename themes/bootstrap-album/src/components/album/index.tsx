import { AlbumContainer } from "@idahoedokpayi/basic-landing-page-components";
import { graphql, StaticQuery } from "gatsby";
import { FluidObject } from "gatsby-image";
import * as React from "react";
import { AlbumnColumn } from "../albumcolumn";
export interface IAlbumProps {
  className?: string;
  containerClassName?: string;
}
export interface IMDXData {
  frontmatter: {
    date?: string;
    title?: string;
    featuredImage?: {
      childImageSharp: {
        fluid: FluidObject | FluidObject[];
      };
    };
  };
  body: any;
}
interface IAlbumQueryResults {
  allMdx: {
    nodes: IMDXData[];
  };
}
const albumQuery = graphql`
  query AlbumQuery {
    allMdx(filter: { fileAbsolutePath: { glob: "**/content/album/**.mdx" } }) {
      nodes {
        frontmatter {
          date
          title
          featuredImage {
            childImageSharp {
              fluid(maxHeight: 225) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        body
      }
    }
  }
`;

export function Album(props: IAlbumProps): JSX.Element {
  const { className, containerClassName } = props;
  return (
    <AlbumContainer>
      <StaticQuery
        query={albumQuery}
        render={(data: IAlbumQueryResults) =>
          data.allMdx.nodes.map((mdxData: IMDXData, index: number) => (
            <AlbumnColumn
              {...mdxData}
              containerClassName={containerClassName}
              className={className}
              key={`album-column-${index}`}
            />
          ))
        }
      />
    </AlbumContainer>
  );
}
