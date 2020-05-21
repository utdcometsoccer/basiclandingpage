import * as React from "react";
export function CorporateTestimonials(
  props: ICorporateTestimonialsProps
): JSX.Element {
  const { sectionHeader, testimonials } = props;
  return (
    <div className="container-fluid gray">
      <div className="content">
        <div className="row">
          <div className="col-12">
            <h2 className="section-header">{sectionHeader}</h2>
          </div>
        </div>
        {testimonials.map(
          (testimony: ICorporateTestimonialProps, index: number) => (
            <CorporateTestimonial
              {...testimony}
              key={`corporate-testimony-${index}`}
            />
          )
        )}
      </div>
    </div>
  );
}

export interface ICorporateTestimonialProps {
  avatar: JSX.Element;
  avatarClassName?:string;
  bodyClassName?:string;
  children: JSX.Element|string;
  className?:string;
  
}
export function CorporateTestimonial(
  props: ICorporateTestimonialProps
): JSX.Element {
  const { avatar, avatarClassName, bodyClassName, children, className } = props;
  return (
    <div className={className || "row gallery"}>
      <div className={avatarClassName || "col-2"}>
        {avatar}
      </div>
      <div className={bodyClassName || "col-10"}>{children}</div>
    </div>
  );
}

export interface ICorporateTestimonialsProps {
  sectionHeader: string;
  testimonials: ICorporateTestimonialProps[];
}

