  import * as React from "react";
import { IProductFooterNavigationElementProps, ProductFooter, ProductFooterNavigation } from "../productfooter";
import { INavigationLink, ProductNavigation } from "../productnavigation";
import { ProductLandingPage } from "../productlandingpage";
  
  export interface IProductLayoutProps {
    children?: React.ReactNode;
    logo?: React.ReactNode;
    footerNavigation: IProductFooterNavigationElementProps[];
    navigation?: INavigationLink[];
  }
  
  export function ProductLayout(props: IProductLayoutProps): React.ReactNode {
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
  