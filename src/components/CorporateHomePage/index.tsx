import "bootstrap/scss/bootstrap.scss";
import * as React from "react";
import "./corporate-styles.css";
import { ICorporateHomePageProps } from "./ICorporateHomePageProps";


export function CorporateHomePage(props: ICorporateHomePageProps): JSX.Element {
  const { children, footer, navigation } = props;
  const today = new Date();
  const year = today.getFullYear();
  return (
    <React.Fragment>
      <div className="container-fluid top-container">{navigation}</div>
      {children}
      <div className="container-fluid footer-container">{footer}</div>
    </React.Fragment>
  );
}
