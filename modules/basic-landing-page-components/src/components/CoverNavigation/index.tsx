import * as React from "react";

export interface ICoverNavigationLink {
  active?: boolean;
  children: React.ReactNode;
  url: string;
}
export interface ICoverNavigationProps {
  navigation: ICoverNavigationLink[];
  brand: JSX.Element;
}

export function CoverNavigation(props: ICoverNavigationProps): JSX.Element {
  const { brand, navigation } = props;
  return (
    <div className="inner">
      {brand}
      <nav className="nav nav-masthead justify-content-center">
        {navigation.map((link: ICoverNavigationLink, index: number) => (
          <a
            className={`nav-link ${link.active ? "active" : ""}`}
            key={`cover-nav-link${index}`}
            href={link.url}
          >
            {link.children}
          </a>
        ))}
      </nav>
    </div>
  );
}
