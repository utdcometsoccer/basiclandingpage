import * as React from "react";
import { IProductNavigationProps } from "./IProductNavigationProps";
import { INavigationLink } from "./ProductMenuItem/INavigationLink";
import { ProductMenuItem } from "./ProductMenuItem/index";

export function ProductNavigation(props: IProductNavigationProps) {
  const { home, logo, navigation } = props;
  const navigationItems = navigation || [];
  return (
    <nav className="site-header sticky-top py-1">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <a className="py-2" href={home || "/"} aria-label="Product">
          {logo}
        </a>
        {navigationItems.map((item: INavigationLink, index: number) => (
          <ProductMenuItem {...item} key={`product-menu-${index}`} />
        ))}
      </div>
    </nav>
  );
}
