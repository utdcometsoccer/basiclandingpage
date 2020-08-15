import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import { IMDXData } from "../album";
import { AlbumCard } from "../AlbumCard";
import { AlbumCardBody } from "../AlbumCardBody";
import { AlbumCardText } from "../AlbumCardText";

export interface IAlbumEntryProps extends IMDXData {
  className?: string;
  containerClassName?: string;
  details?: (props: IAlbumEntryProps) => React.ReactElement;
}
export function AlbumEntry(props: IAlbumEntryProps): React.ReactElement {
  const {
    className,
    containerClassName,
    details,
    excerpt,
    frontmatter,
  } = props;
  const showDetails: boolean = typeof details !== 'undefined';
  return (
    <div className={containerClassName || "col-md-4"}>
      <AlbumCard className={className}>
        <Img
          fluid={frontmatter.featuredImage.childImageSharp.fluid}
          alt={frontmatter.title}
        />
        <AlbumCardBody>
          <AlbumCardText>
            <MDXRenderer>{excerpt}</MDXRenderer>
          </AlbumCardText>
        </AlbumCardBody>
      </AlbumCard>
      {showDetails ? details(props) : <span style={{ display: "none" }}>details placeholder</span>}
    </div>
  );
}
