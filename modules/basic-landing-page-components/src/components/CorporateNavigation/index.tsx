import * as React from "react";

export function CorporateNavigation(
  props: ICorporateNavigationProps
): React.ReactNode {
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
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export interface INavigationItemProps{
  active?:boolean;
  children:React.ReactNode;
  clickAction?:(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>void;
  path:string;
}
export function NavigationItem(props: INavigationItemProps): React.ReactElement {
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
export interface ICorporateNavigationProps{
  brand:string;
  brandHome:string;
  logo:string;
  navigationItems?:INavigationItemProps[];
}

