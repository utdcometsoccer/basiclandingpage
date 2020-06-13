import * as React from "react";
import { INavigationItemProps, NavigationItem } from "../corporatenavigation";


export function CorporateFooter(props: ICorporateFooterProps): React.ReactNode {
  const { footerMenus, organizationName } = props;
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="content footer">
      <div className="row">
        {footerMenus.map(
          (footerMenu: ICorporateFooterNavigationMenuProps, index: number) => (
            <CorporateFooterNavigationMenu
              {...footerMenu}
              key={`footer-nav-menu-${index}`}
            />
          )
        )}
      </div>
      <div className="row">
        <div className="col-12 text-center">
          &copy;{year} {organizationName}
        </div>
      </div>
    </div>
  );
}

export interface ICorporateFooterNavigationMenuProps {
  navigationItems: INavigationItemProps[];
}
export function CorporateFooterNavigationMenu(
  props: ICorporateFooterNavigationMenuProps
): React.ReactNode {
  const { navigationItems } = props;
  return (
    <div className="col-4">
      <ul className="nav flex-column">
        {navigationItems.map((item: INavigationItemProps, index: number) => (
          <NavigationItem
            {...item}
            key={`corporate-footer-navigation-item-${index}`}
          />
        ))}
      </ul>
    </div>
  );
}
export interface ICorporateFooterProps {
  footerMenus: ICorporateFooterNavigationMenuProps[];
  organizationName: React.ReactNode;
}
