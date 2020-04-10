import * as React from "react";
import "bootstrap/scss/bootstrap.scss";
import "../corporate-styles.css";
import { ICorporateServicesProps } from "./ICorporateServicesProps";
import { ICorporateServiceProps } from "./CorporateService/ICorporateServiceProps";
import { CorporateService } from "./CorporateService/index";

export function CorporateServices(props: ICorporateServicesProps): JSX.Element {
  const { heading, services } = props;
  const servicesHeading = heading || "Services";
  return (
    <div className="container-fluid">
      <div className="content">
        <div className="row">
          <div className="col-12">
            <h2 className="section-header">{servicesHeading}</h2>
          </div>
        </div>
        {services.map((service: ICorporateServiceProps, index: number) => (
          <CorporateService {...service} key={`corporate-service-${index}`} />
        ))}
      </div>
    </div>
  );
}
