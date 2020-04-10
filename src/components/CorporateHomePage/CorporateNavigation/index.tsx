import * as React from "react";
import "bootstrap/scss/bootstrap.scss";
import "../corporate-styles.css";
import { ICorporateNavigationProps } from "./ICorporateNavigationProps";
import { INavigationItemProps } from "./NavigationItem/INavigationItemProps";
import { NavigationItem } from "./NavigationItem/index";

export function CorporateNavigation(
  props: ICorporateNavigationProps
): JSX.Element {
  const { brand, brandHome, logo, navigationItems } = props;
  const navItems = navigationItems || [];
  return (
    <div className="content">
      <div className="row">
        <div className="col-12">
          <img className="nav-logo" src={logo} />
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="row">
              <div className="col-12">
                <a className="navbar-brand" href={brandHome}>
                  {brand}
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    {navItems.map((item:INavigationItemProps, index:number)=><NavigationItem {...item} key={`corporate-navigation-item-${index}`} />)}
                  {/*<li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
<li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</li>*/}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
