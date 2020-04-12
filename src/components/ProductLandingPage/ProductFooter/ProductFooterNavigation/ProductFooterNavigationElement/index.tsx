import * as React from "react";
import { IProductFooterNavigationElementProps } from "./IProductFooterNavigationElementProps";
import { ProductFooterNavigationSubMenu } from "./ProductFooterNavigationSubMenu/index";

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
