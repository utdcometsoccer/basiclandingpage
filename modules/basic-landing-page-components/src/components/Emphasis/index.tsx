import * as React from "react"
export interface IEmphasisProps {
    children: JSX.Element | string;
  }
  
export function Emphasis(props: IEmphasisProps): JSX.Element {
  const { children } = props
  return <span className="font-weight-bold text-primary">{children}</span>
}

