import * as React from "react";
import { ILightProductHeadlineProps } from "./ILightProductHeadlineProps";

export function LightProductHeadline(
  props: ILightProductHeadlineProps
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
