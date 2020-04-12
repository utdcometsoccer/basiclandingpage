import * as React from "react";
import { INavigationLink } from "../ProductNavigation";

export interface IProductFooterNavigationElementProps {
  heading: string;
  subMenuItems: INavigationLink[];
}
export interface IProductFooterNavigationProps {
  footerNavigation: IProductFooterNavigationElementProps[];
}
export interface IProductFooterNavigationSubMenuProps {
  subMenuItems: INavigationLink[];
}

export function SubMenuElement(props: INavigationLink): JSX.Element {
  const { children, path } = props;
  return (
    <li>
      <a className="text-muted" href={path}>
        {children}
      </a>
    </li>
  );
}
export function ProductFooterNavigationSubMenu(
  props: IProductFooterNavigationSubMenuProps
): JSX.Element {
  const { subMenuItems } = props;
  return (
    <ul className="list-unstyled text-small">
      {subMenuItems.map((item: INavigationLink, index: number) => (
        <SubMenuElement {...item} key={`sub-menu-item-${index}`} />
      ))}
    </ul>
  );
}

export function ProductFooterNavigationElement(
  props: IProductFooterNavigationElementProps
): JSX.Element {
  const { heading, subMenuItems } = props;
  return (
    <div className="col-6 col-md">
      <h5>{heading}</h5>
      <ProductFooterNavigationSubMenu subMenuItems={subMenuItems} />
    </div>
  );
}

export function ProductFooterNavigation(
  props: IProductFooterNavigationProps
): JSX.Element {
  const { footerNavigation } = props;
  return (
    <React.Fragment>
      {footerNavigation.map(
        (navItem: IProductFooterNavigationElementProps, index: number) => (
          <ProductFooterNavigationElement
            {...navItem}
            key={`product-footer-navigation-element-${index}`}
          />
        )
      )}
    </React.Fragment>
  );
}
export interface IProductFooterProps {
  children?: JSX.Element;
  logo?: JSX.Element;
}
export function ProductFooter(props: IProductFooterProps): JSX.Element {
  const { children, logo } = props;
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          {logo}
          <small className="d-block mb-3 text-muted">&copy; {year}</small>
        </div>
        {children}
      </div>
    </footer>
  );
}
