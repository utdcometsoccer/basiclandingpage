import * as React from "react";

export interface IJumbotronSectionProps {
  children?: React.ReactNode;
}

export function JumbotronSection(props: IJumbotronSectionProps): React.ReactNode {
  const { children } = props;
  return (
    <section className="jumbotron text-center">
      <div className="container">{children}</div>
    </section>
  );
}
