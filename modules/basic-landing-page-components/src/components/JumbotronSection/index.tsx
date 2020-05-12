import * as React from "react";

export interface IJumbotronSectionProps {
  children?: JSX.Element | string;
}

export function JumbotronSection(props: IJumbotronSectionProps): JSX.Element {
  const { children } = props;
  return (
    <section className="jumbotron text-center">
      <div className="container">{children}</div>
    </section>
  );
}
