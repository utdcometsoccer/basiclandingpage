import "bootstrap/scss/bootstrap.scss";
import * as React from "react";
import "../product.css";
import { IDarkProductHeadlineProps } from "./IDarkProductHeadlineProps";

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
