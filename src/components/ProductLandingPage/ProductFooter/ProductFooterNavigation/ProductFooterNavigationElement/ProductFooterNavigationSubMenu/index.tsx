import * as React from "react";
import "bootstrap/scss/bootstrap.scss";
import "../../../../product.css";
import { IProductFooterNavigationSubMenuProps } from "./IProductFooterNavigationSubMenuProps";
import { INavigationLink } from "../../../../ProductNavigation/ProductMenuItem/INavigationLink";
import { SubMenuElement } from "./SubMenuElement/index";

export function ProductFooterNavigationSubMenu(props:IProductFooterNavigationSubMenuProps): JSX.Element{
    const { subMenuItems } = props;
    return <ul className="list-unstyled text-small">
        {subMenuItems.map((item:INavigationLink, index:number)=><SubMenuElement {...item} key={`sub-menu-item-${index}`} />)}
    </ul>;
}