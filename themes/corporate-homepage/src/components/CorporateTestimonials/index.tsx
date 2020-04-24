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
  children: JSX.Element|string;
  image: string;
}
export function CorporateTestimonial(
  props: ICorporateTestimonialProps
): JSX.Element {
  const { children, image } = props;
  return (
    <div className="row gallery">
      <div className="col-2">
        <img src={image} alt="" />
      </div>
      <div className="col-10">{children}</div>
    </div>
  );
}

export interface ICorporateTestimonialsProps {
  sectionHeader: string;
  testimonials: ICorporateTestimonialProps[];
}

