import * as React from "react";

export function CorporateServices(props: ICorporateServicesProps): React.ReactElement {
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

export interface ICorporateServiceProps{
  children:React.ReactNode;
  serviceName: string;
}

export function CorporateService(props: ICorporateServiceProps): React.ReactElement {
  const { children, serviceName } = props;
  return (
    <div className="row">
      <div className="col-4">{serviceName}</div>
      <div className="col-8">{children}</div>
    </div>
  );
}

export interface ICorporateServicesProps{
  heading?: string;
  services:ICorporateServiceProps[];
}
