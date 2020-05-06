import * as React from "react";

export interface ICorporateHomePageProps{
  children?:JSX.Element;
  footer?:JSX.Element;
  navigation?:JSX.Element;
}


export function CorporateHomePage(props: ICorporateHomePageProps): JSX.Element {
  const { children, footer, navigation } = props;
  return (
    <React.Fragment>
      <div className="container-fluid top-container">{navigation}</div>
      {children}
      <div className="container-fluid footer-container">{footer}</div>
    </React.Fragment>
  );
}
