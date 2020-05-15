import {
  AlbumFooter,
  AlbumHeader,
  IAlbumHeaderProps,
  JumbotronSection,
} from "@idahoedokpayi/basic-landing-page-components";
import { Github, Twitter } from "@idahoedokpayi/basic-landing-page-svg";
import { Link } from "gatsby";
import * as React from "react";
import { Album } from "../album";
import {linkedin} from "@idahoedokpayi/basic-landing-page-images";

export interface ILayoutProps extends IAlbumHeaderProps {
  footerContent?: JSX.Element | string;
  jumbotronContent?: JSX.Element | string;
  cardClassName?: string;
}

export function Layout(props: ILayoutProps): JSX.Element {
  const {
    cardClassName,
    children,
    contactNavigation,
    footerContent,
    jumbotronContent,
  } = props;
  const githubSource = "https://github.com/utdcometsoccer/basiclandingpage";
  const defaultFooter = (
    <React.Fragment>
      <p className="float-right">
        <Link to="#top">Link to Top</Link>
      </p>
      <p>
        Bootstrap Album Gatsby Theme is &copy; Idaho Edokpayi, but please
        download and customize it for yourself!
      </p>
      <p>
        Get the source for this theme and more at:{" "}
        <a href={githubSource}>
          <Github width={"1rem"} />{" "}
          Github
        </a>
      </p>
    </React.Fragment>
  );
  const defaultJumboTronContent = (
    <React.Fragment>
      <h1>Bootstrap Album Gatsby Theme</h1>
      <p className="lead text-muted">
        This is a{" "}
        <a href={"https://www.gatsbyjs.org/docs/themes/"}>Gatsby Theme</a> based
        on the Bootstrap Album example. We use{" "}
        <a href="https://www.gatsbyjs.org/docs/glossary/mdx/">MDX</a> for the
        album content.
      </p>
      <p>
        <a href={githubSource} className="btn btn-primary my-2">
          Checkout the source
        </a>
        <a
          href="https://www.linkedin.com/in/whoisidaho/"
          className="btn btn-secondary my-2"
        >
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
              href: "https://twitter.com/whoisidaho",
            }, {
              children: <img src={linkedin} className={"linkedin-logo"} />,
              href: "https://www.linkedin.com/in/whoisidaho/",
            },
          ]
        }
      >
        {children || (
            "This album theme is a great starting point for building your own custom portfolio, or a personal picture album. The author is available for consulting if you need further help building your site."
        )}
      </AlbumHeader>
      <main role="main" id={"top"}>
        <JumbotronSection>
          {jumbotronContent || defaultJumboTronContent}
        </JumbotronSection>
        <Album className={cardClassName} />
      </main>
      <AlbumFooter>{footerContent || defaultFooter}</AlbumFooter>
    </React.Fragment>
  );
}
