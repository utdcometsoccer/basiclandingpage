import * as React from "react";

export interface ICorporateHomePageProps{
  children?:React.ReactNode;
  footer?:React.ReactNode;
  navigation?:React.ReactNode;
}


export function CorporateHomePage(props: ICorporateHomePageProps): React.ReactNode {
  const { children, footer, navigation } = props;
  return (
    <React.Fragment>
      <div className="container-fluid top-container">{navigation}</div>
      {children}
      <div className="container-fluid footer-container">{footer}</div>
    </React.Fragment>
  );
}
