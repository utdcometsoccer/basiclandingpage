import * as React from "react";

export interface ISampleContentProps {
  buttonAction?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  buttonContent?: JSX.Element;
  buttonLink?: string;
  children?: JSX.Element;
  heading?: string;
  showButton?: boolean;
}

export function SampleContent(props: ISampleContentProps): JSX.Element {
  const {
    buttonAction,
    buttonContent,
    buttonLink,
    children,
    heading,
    showButton,
  } = props;
  // showButton defaults to true!
  const shouldShowButton = undefined === showButton ? true : showButton;
  return (
    <React.Fragment>
      <h1 className="cover-heading">{heading || "Cover your page."}</h1>
      {children || (
        <p className="lead">
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
      )}
      <p className="lead">
        {shouldShowButton ? (
          <a
            href={buttonLink || "#"}
            onClick={buttonAction}
            className="btn btn-lg btn-secondary"
          >
            {buttonContent || <React.Fragment>Learn more</React.Fragment>}
          </a>
        ) : undefined}
      </p>
    </React.Fragment>
  );
}
