import * as React from "react"
export interface IEmphasisProps {
    children: React.ReactNode;
  }
  
export function Emphasis(props: IEmphasisProps): React.ReactElement {
  const { children } = props
  return <span className="font-weight-bold text-primary">{children}</span>
}

