import * as React from "react";
import { IProductHeadlineProps } from "./IProductHeadlineProps";

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
