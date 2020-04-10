import * as React from "react";
import "bootstrap/scss/bootstrap.scss";
import "./product.css";
import { IProductLandingPageProps } from "./IProductLandingPageProps";

export function ProductLandingPage(
  props: IProductLandingPageProps
): JSX.Element {
  const {children, footer, navigation} = props;
 
  return (
    <React.Fragment>
      {navigation}
      {children}
      {footer}
    </React.Fragment>
  );
}
