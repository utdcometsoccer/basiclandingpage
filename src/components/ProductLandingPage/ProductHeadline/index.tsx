import * as React from "react";

export function ProductHeadline(props: IProductHeadlineProps): JSX.Element {
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
  children?: JSX.Element;
  headline: string;
  subheading?: string;
}

export function DarkProductHeadline(
  props: IDarkProductHeadlineProps
): JSX.Element {
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
): JSX.Element {
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
  buttonContent?: JSX.Element;
  buttonAction?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  buttonHref?: string;
  headline: string;
  headlineContent?: JSX.Element;
  secondaryHeadlineContent?: JSX.Element;
  subheading?: string;
}
export interface IProductHeadlineContainerProps {
  children: JSX.Element[];
}
export function ProductHeadlineContainer(
  props: IProductHeadlineContainerProps
): JSX.Element {
  const { children } = props;
  return (
    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      {children}
    </div>
  );
}
