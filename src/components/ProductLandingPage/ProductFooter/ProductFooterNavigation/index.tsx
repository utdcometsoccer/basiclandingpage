import * as React from "react";
import "bootstrap/scss/bootstrap.scss";
import "../../product.css";
import { IProductFooterNavigationProps } from "./IProductFooterNavigationProps";
import { ProductFooterNavigationElement } from "./ProductFooterNavigationElement/index";
import { IProductFooterNavigationElementProps } from "./ProductFooterNavigationElement/IProductFooterNavigationElementProps";

export function ProductFooterNavigation(props:IProductFooterNavigationProps): JSX.Element{
    const {footerNavigation} = props;
return <React.Fragment>
    {footerNavigation.map((navItem:IProductFooterNavigationElementProps, index:number)=><ProductFooterNavigationElement {...navItem} key={`product-footer-navigation-element-${index}`} />)}
</React.Fragment>
}