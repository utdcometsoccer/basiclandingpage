import "bootstrap/scss/bootstrap.scss";
import * as React from "react";
import "../corporate-styles.css";
import { ICorporateFooterNavigationMenuProps } from "./CorporateFooterNavigationMenu/ICorporateFooterNavigationMenuProps";
import { CorporateFooterNavigationMenu } from "./CorporateFooterNavigationMenu/index";
import { ICorporateFooterProps } from "./ICorporateFooterProps";
export function CorporateFooter(props: ICorporateFooterProps): JSX.Element {
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
        <div className="col-12 copyright-text">
          &copy;{year} {organizationName}
        </div>
      </div>
    </div>
  );
}
