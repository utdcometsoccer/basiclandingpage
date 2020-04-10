import * as React from "react";
import "bootstrap/scss/bootstrap.scss";
import "../../corporate-styles.css";
import { INavigationItemProps } from "./INavigationItemProps";

export function NavigationItem(props: INavigationItemProps): JSX.Element {
  const { active, children, clickAction, path } = props;
  const isActive = active || false;
  const activeClass = isActive ? "active" : "";
  return (
    <li className={`nav-item ${activeClass}`}>
      <a className="nav-link" href={path} onClick={clickAction}>
        {children}
        {isActive ? <span className="sr-only">(current)</span> : undefined}
      </a>
    </li>
  );
}
