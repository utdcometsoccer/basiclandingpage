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
}

export function AlbumEntry(props: IAlbumEntryProps): JSX.Element {
  const { body, className, containerClassName, frontmatter } = props;
  return (
    <div className={containerClassName || "col-md-4"}>
      <AlbumCard className={className}>
        <React.Fragment>
          <Img
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
            alt={frontmatter.title}
          />
          <AlbumCardBody>
            <AlbumCardText>
              <MDXRenderer>{body}</MDXRenderer>
            </AlbumCardText>
          </AlbumCardBody>
        </React.Fragment>
      </AlbumCard>
    </div>
  );
}
