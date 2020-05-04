import {
  CorporateFooter,
  CorporateHomePage,
  CorporateNavigation,
  INavigationItemProps,
} from "@idahoedokpayi/basic-landing-page-components/src";
import * as React from "react";

export interface ILayoutProps {
  brandHome: string;
  children?: JSX.Element;
  footerNavigation?: INavigationItemProps[];
  logo: string;
  navigationItems?: INavigationItemProps[];
  orgName: string;
  pageName?: string;
  socialNavigation?: INavigationItemProps[];
}

export function Layout(props: ILayoutProps): JSX.Element {
  const {
    brandHome,
    children,
    footerNavigation,
    logo,
    navigationItems,
    orgName,
    pageName,
    socialNavigation,
  } = props;
  return (
    <CorporateHomePage
      navigation={
        <CorporateNavigation
          brand={orgName}
          brandHome={brandHome}
          logo={logo}
          navigationItems={navigationItems.map(
            (navItem: INavigationItemProps) => {
              return { active: pageName == navItem.children, ...navItem };
            }
          )}
        />
      }
      footer={
        <CorporateFooter
          footerMenus={[
            {
              navigationItems: footerNavigation,
            },
            {
              navigationItems: socialNavigation,
            },
          ]}
          organizationName={orgName}
        />
      }
    >
      {children}
    </CorporateHomePage>
  );
}
