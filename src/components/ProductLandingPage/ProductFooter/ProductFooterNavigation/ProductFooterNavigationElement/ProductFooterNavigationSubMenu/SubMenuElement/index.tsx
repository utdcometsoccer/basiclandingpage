import * as React from "react";
import { ISubMenuElementProps } from "./ISubMenuElementProps";

export function SubMenuElement(props:ISubMenuElementProps):JSX.Element{
    const { children, path} = props;
    return <li>
    <a className="text-muted" href={path}>{children}</a>
  </li>
}