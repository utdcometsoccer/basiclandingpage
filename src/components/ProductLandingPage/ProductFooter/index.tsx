import * as React from "react";
import "bootstrap/scss/bootstrap.scss";
import "../product.css";
import { IProductFooterProps } from "./IProductFooterProps";

export function ProductFooter(props:IProductFooterProps):JSX.Element{
    const {children, logo} = props;
    const today = new Date();
    const year = today.getFullYear();
    return  <footer className="container py-5">
    <div className="row">
      <div className="col-12 col-md">
        {logo}
        <small className="d-block mb-3 text-muted">&copy; {year}</small>
      </div>
     {children}
    </div>
  </footer>;
}