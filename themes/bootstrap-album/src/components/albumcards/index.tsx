import { StaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import {
  AlbumCard,
  AlbumCardBody,
  AlbumCardText,
} from "@idahoedokpayi/basic-landing-page-components";
import * as React from "react";

export interface IAlbumCardsProps {
  className?: string;
  containerClassName?: string;
}
interface IMDXData {
  frontmatter: {
    data?: string;
    title?: string;
    featuredImage?: {
      childImageSharp: {
        fluid: FluidObject | FluidObject[];
      };
    };
  };
  body: string;
}
interface IAlbumQueryResults {
  data: {
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

export function AlbumCards(props: IAlbumCardsProps): JSX.Element {
  const { className, containerClassName } = props;
  return (
    <StaticQuery
      query={albumQuery}
      render={(queryResult: IAlbumQueryResults) => (
        <React.Fragment>
          {queryResult.data.nodes.map((mdxData: IMDXData, index: number) => {
            const { frontmatter, body } = mdxData;
            const { data, title, featuredImage } = frontmatter;
            const { childImageSharp } = featuredImage;
            const { fluid } = childImageSharp;
            return (
              <div className={containerClassName || "col-md-4"}>
                <AlbumCard className={className}>
                  <React.Fragment>
                    <Img fluid={fluid} />
                    <AlbumCardBody>
                      <AlbumCardText></AlbumCardText>
                    </AlbumCardBody>
                  </React.Fragment>
                </AlbumCard>
              </div>
            );
          })}
        </React.Fragment>
      )}
    />
  );
}
