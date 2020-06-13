import * as React from "react";

export interface ICoverPageProps {
  navigation?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}
export function CoverPage(props: ICoverPageProps): React.ReactElement {
  const { children, footer, navigation } = props;
  return (
    <div className={'cover-page-wrapper text-center'}>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">{navigation}</header>
        <main role="main" className="inner cover">
          {children}
        </main>
        <footer className="mastfoot mt-auto">
          <div className="inner">{footer}</div>
        </footer>
      </div>
    </div>
  );
}
