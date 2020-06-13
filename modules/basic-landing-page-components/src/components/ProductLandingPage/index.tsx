import * as React from "react";

export interface IProductLandingPageProps {
  children:React.ReactNode;
  footer?:React.ReactNode;
  navigation?: React.ReactNode;  
}


export function ProductLandingPage(
  props: IProductLandingPageProps
): React.ReactElement {
  const {children, footer, navigation} = props;
 
  return (
    <React.Fragment>
      {navigation}
      {children}
      {footer}
    </React.Fragment>
  );
}
