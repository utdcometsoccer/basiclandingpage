import * as React from "react";
import "bootstrap/scss/bootstrap.scss";
import "./corporate-styles.css";
import pic1 from "./img/pic1.jpg";
import pic2 from "./img/pic2.jpg";
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
