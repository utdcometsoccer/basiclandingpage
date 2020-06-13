import * as React from "react";

export interface IJumbotronSectionProps {
  children?: React.ReactNode;
}

export function JumbotronSection(props: IJumbotronSectionProps): JSX.Element {
  const { children } = props;
  return (
    <section className="jumbotron text-center">
      <div className="container">{children}</div>
    </section>
  );
}
