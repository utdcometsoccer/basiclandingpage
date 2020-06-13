import {
  AlbumFooter,
  AlbumHeader,
  IAlbumHeaderProps,
  JumbotronSection,
  IMDXData,
  Album,
} from "@idahoedokpayi/basic-landing-page-components";
import { Github, Twitter } from "@idahoedokpayi/basic-landing-page-svg";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import { linkedin } from "@idahoedokpayi/basic-landing-page-images";

export interface ILayoutProps extends IAlbumHeaderProps {
  href?: string;
  footerContent?: React.ReactNode;
  jumbotronContent?: React.ReactNode;
  cardClassName?: string;
}

export interface ISiteMetadata {
  site: {
    siteMetadata: {
      footerText: string;
      headerText: string;
      github: string;
      linkedinURL: string;
      title: string;
      twitter: string;
      linkToTopText: string;
      jumboTronHeadline: string;
      footerLinkText: string;
    };
  };
  allMdx: {
    nodes: IMDXData[];
  };
}

export function Layout(props: ILayoutProps): JSX.Element {
  const {
    cardClassName,
    children,
    contactNavigation,
    footerContent,
    href,
    jumbotronContent,
  } = props;
  const data: ISiteMetadata = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            footerText
            headerText
            github
            linkedinURL
            title
            twitter
            linkToTopText
            jumboTronHeadline
            footerLinkText
          }
        }
        allMdx(
          filter: { fileAbsolutePath: { glob: "**/content/album/**.mdx" } }
        ) {
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
    `
  );
  const {
    footerLinkText,
    footerText,
    github,
    headerText,
    jumboTronHeadline,
    linkedinURL,
    linkToTopText,
    twitter,
  } = data.site.siteMetadata;
  const defaultFooter = (
    <React.Fragment>
      <p className="float-right">
        <Link to={`${href || "/album"}#top`}>{linkToTopText}</Link>
      </p>
      <p>{footerText}</p>
      <p>
        {footerLinkText}
        <a href={github}>
          <Github width={"1rem"} /> Github
        </a>
      </p>
    </React.Fragment>
  );
  const defaultJumboTronContent = (
    <React.Fragment>
      <h1>{jumboTronHeadline}</h1>
      <p className="lead text-muted">
        This is a{" "}
        <a href={"https://www.gatsbyjs.org/docs/themes/"}>Gatsby Theme</a> based
        on the Bootstrap Album example. We use{" "}
        <a href="https://www.gatsbyjs.org/docs/glossary/mdx/">MDX</a> for the
        album content.
      </p>
      <p>
        <a href={github} className="btn btn-primary my-2">
          Checkout the source
        </a>
        <a href={linkedinURL} className="btn btn-secondary my-2">
          Visit the author's linked in page
        </a>
      </p>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <AlbumHeader
        {...props}
        contactNavigation={
          contactNavigation || [
            {
              children: <Twitter width={"1rem"} />,
              href: twitter,
            },
            {
              children: <img src={linkedin} className={"linkedin-logo"} />,
              href: linkedinURL,
            },
          ]
        }
      >
        {children || headerText}
      </AlbumHeader>
      <main role="main" id={"top"}>
        <JumbotronSection>
          {jumbotronContent || defaultJumboTronContent}
        </JumbotronSection>
        <Album mdxData={data.allMdx.nodes} className={cardClassName} />
      </main>
      <AlbumFooter>{footerContent || defaultFooter}</AlbumFooter>
    </React.Fragment>
  );
}
