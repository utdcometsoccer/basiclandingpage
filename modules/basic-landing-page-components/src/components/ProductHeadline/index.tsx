import * as React from "react";

export function ProductHeadline(props: IProductHeadlineProps): React.ReactNode {
  const {
    buttonAction,
    buttonContent,
    buttonHref,
    buttonVisible,
    headline,
    headlineContent,
    secondaryHeadlineContent,
    subheading,
  } = props;
  const buttonClass = buttonVisible ? "btn btn-outline-secondary" : "d-none";
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">{headline}</h1>
        <p className="lead font-weight-normal">{subheading}</p>
        <a className={buttonClass} href={buttonHref} onClick={buttonAction}>
          {buttonContent}
        </a>
      </div>
      <div className="product-device shadow-sm d-none d-md-block">
        {headlineContent}
      </div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block">
        {secondaryHeadlineContent}
      </div>
    </div>
  );
}
export interface IDarkProductHeadlineProps {
  children?: React.ReactNode;
  headline: string;
  subheading?: string;
}

export function DarkProductHeadline(
  props: IDarkProductHeadlineProps
): React.ReactNode {
  const { children, headline, subheading } = props;
  return (
    <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">{headline}</h2>
        <p className="lead">{subheading}</p>
      </div>
      {children}
    </div>
  );
}

export function LightProductHeadline(
  props: IDarkProductHeadlineProps
): React.ReactNode {
  const { children, headline, subheading } = props;
  return (
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">{headline}</h2>
        <p className="lead">{subheading}</p>
      </div>
      {children}
    </div>
  );
}

export interface IProductHeadlineProps {
  buttonVisible: boolean;
  buttonContent?: React.ReactNode|string;
  buttonAction?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  buttonHref?: string;
  headline: string;
  headlineContent?: React.ReactNode;
  secondaryHeadlineContent?: React.ReactNode;
  subheading?: string;
}
export interface IProductHeadlineContainerProps {
  children: React.ReactNode;
}
export function ProductHeadlineContainer(
  props: IProductHeadlineContainerProps
): React.ReactNode {
  const { children } = props;
  return (
    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      {children}
    </div>
  );
}
