import * as React from "react";
import { IProductMenuItemProps } from "./IProductMenuItemProps";
import "bootstrap/scss/bootstrap.scss";
import "../../product.css";

export function ProductMenuItem(props:IProductMenuItemProps):JSX.Element{
    const { children, path} = props;
return <a className="py-2 d-none d-md-inline-block" href={path}>{children}</a>
}