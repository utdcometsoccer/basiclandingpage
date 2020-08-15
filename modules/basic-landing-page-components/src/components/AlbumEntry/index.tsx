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
  details?: (data: IMDXData) => React.ReactElement;
}
export function AlbumEntry(props: IAlbumEntryProps): React.ReactElement {
  const { className, containerClassName, details, excerpt, frontmatter } = props;
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
          {details ? details(props) : undefined}
      </AlbumCard>
    </div>
  );
}
