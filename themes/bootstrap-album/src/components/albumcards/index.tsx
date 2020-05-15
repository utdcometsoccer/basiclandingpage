import { Link, StaticQuery, graphql } from "gatsby";
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
          fluid: {
            src: string;
          };
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
                src
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
      render={(queryResult:IAlbumQueryResults) => <React.Fragment>{queryResult.data.nodes.map((mdxData:IMDXData, index:number)=>{
          return <div className={containerClassName|| "col-md-4"}>
              
          </div>
      })}</React.Fragment>}
    />
  );
}
