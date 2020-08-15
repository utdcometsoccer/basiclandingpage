import { FluidObject } from "gatsby-image";
import * as React from "react";
import { AlbumContainer } from "../AlbumContainer";
import { AlbumEntry, IAlbumEntryProps } from "../AlbumEntry";

export interface IAlbumProps {
  className?: string;
  containerClassName?: string;
  mdxData: IMDXData[];
  details?: (data: IAlbumEntryProps) => React.ReactElement;
}
export interface IMDXData {
  body: string;
  excerpt: string;
  frontmatter: {
    date?: string;
    title?: string;
    featuredImage?: {
      childImageSharp: {
        fluid: FluidObject | FluidObject[];
      };
    };
  };
  fields?: {
    slug: string;
  };
  id?: string;
}

export function Album(props: IAlbumProps): React.ReactElement {
  const { className, containerClassName, details, mdxData } = props;
  return (
    <AlbumContainer>
      {mdxData.map((mdxData: IMDXData, index: number) => (
        <AlbumEntry
          {...mdxData}
          containerClassName={containerClassName}
          className={className}
          details={details}
          key={`album-column-${index}`}
        />
      ))}
    </AlbumContainer>
  );
}
