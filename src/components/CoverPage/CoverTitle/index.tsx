import * as React from "react";

export interface ICoverTitleProps {
  children: string;
}
export function CoverTitle(props: ICoverTitleProps): JSX.Element {
  const { children } = props;
  return <h3 className="masthead-brand">{children}</h3>;
}
