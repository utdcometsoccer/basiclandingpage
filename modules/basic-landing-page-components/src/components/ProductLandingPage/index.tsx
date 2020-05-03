import * as React from "react";
import "bootstrap/scss/bootstrap.scss";
import "./product.css";

export interface IProductLandingPageProps {
  children:JSX.Element;
  footer?:JSX.Element;
  navigation?: JSX.Element;  
}


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
