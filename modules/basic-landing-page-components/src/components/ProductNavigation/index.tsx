import * as React from "react";

export function ProductNavigation(
  props: IProductNavigationProps
): React.ReactElement {
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
export interface INavigationLink {
  active?: boolean;
  children: React.ReactNode;
  path: string;
}

export interface IProductNavigationProps {
  home?: string;
  logo?: React.ReactNode;
  navigation?: INavigationLink[];
}
export function ProductMenuItem(props: INavigationLink): React.ReactElement {
  const { children, path } = props;
  return (
    <a className="py-2 d-none d-md-inline-block" href={path}>
      {children}
    </a>
  );
}
