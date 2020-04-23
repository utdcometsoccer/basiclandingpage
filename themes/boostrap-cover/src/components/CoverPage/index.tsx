import * as React from "react";

export interface ICoverPageProps {
  navigation?: JSX.Element;
  children: JSX.Element;
  footer?: JSX.Element;
}
export function CoverPage(props: ICoverPageProps): JSX.Element {
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
