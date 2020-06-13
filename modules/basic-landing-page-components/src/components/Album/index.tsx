import { FluidObject } from "gatsby-image";
import * as React from "react";
import { AlbumEntry } from "../AlbumEntry";
import { AlbumContainer } from "../AlbumContainer";
export interface IAlbumProps {
  className?: string;
  containerClassName?: string;
  mdxData: IMDXData[];
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
  body: string;
  excerpt: string;
}

export function Album(props: IAlbumProps): React.ReactNode {
  const { className, containerClassName, mdxData } = props;
  return (
    <AlbumContainer>
      <React.Fragment>
        {mdxData.map((mdxData: IMDXData, index: number) => (
          <AlbumEntry
            {...mdxData}
            containerClassName={containerClassName}
            className={className}
            key={`album-column-${index}`}
          />
        ))}
      </React.Fragment>
    </AlbumContainer>
  );
}
