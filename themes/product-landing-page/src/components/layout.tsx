import {
  INavigationLink,
  IProductFooterNavigationElementProps,
  ProductFooter,
  ProductFooterNavigation,
  ProductLandingPage,
  ProductNavigation,
} from "@idahoedokpayi/basic-landing-page-components";
import "bootstrap/scss/bootstrap.scss";
import * as React from "react";
import "./product.css";

export interface ILayoutProps {
  children?: JSX.Element;
  logo?: JSX.Element;
  footerNavigation: IProductFooterNavigationElementProps[];
  navigation?: INavigationLink[];
}

export function Layout(props: ILayoutProps): JSX.Element {
  const { children, footerNavigation, logo, navigation } = props;
  return (
    <ProductLandingPage
      footer={
        <ProductFooter logo={logo}>
          <ProductFooterNavigation footerNavigation={footerNavigation} />
        </ProductFooter>
      }
      navigation={<ProductNavigation logo={logo} navigation={navigation} />}
    >
      {children}
    </ProductLandingPage>
  );
}
