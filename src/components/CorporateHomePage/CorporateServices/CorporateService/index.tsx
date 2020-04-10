import * as React from "react";
import "bootstrap/scss/bootstrap.scss";
import "../../corporate-styles.css";
import { ICorporateServiceProps } from "./ICorporateServiceProps";

export function CorporateService(props: ICorporateServiceProps): JSX.Element {
  const { children, serviceName } = props;
  return (
    <div className="row">
      <div className="col-4">{serviceName}</div>
      <div className="col-8">{children}</div>
    </div>
  );
}
