import * as React from "react";
import { ICorporateFooterNavigationMenuProps } from "./ICorporateFooterNavigationMenuProps";
import { INavigationItemProps } from "../../CorporateNavigation/NavigationItem/INavigationItemProps";
import { NavigationItem } from "../../CorporateNavigation/NavigationItem/index";

export function CorporateFooterNavigationMenu(
  props: ICorporateFooterNavigationMenuProps
): JSX.Element {
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
