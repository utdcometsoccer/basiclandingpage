import * as React from "react";
import Img from "gatsby-image";
import { IMDXData } from "../album";
import {
  AlbumCard,
  AlbumCardBody,
  AlbumCardText,
} from "@idahoedokpayi/basic-landing-page-components";
import { MDXRenderer } from "gatsby-plugin-mdx";

export interface IAlbumColumnProps extends IMDXData {
  className?: string;
  containerClassName?: string;
}

export function AlbumColumn(props: IAlbumColumnProps): JSX.Element {
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