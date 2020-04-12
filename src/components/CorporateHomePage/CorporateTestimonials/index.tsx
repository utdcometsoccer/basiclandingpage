import * as React from "react";
import { ICorporateTestimonialsProps } from "./ICorporateTestimonialsProps";
import { ICorporateTestimonialProps } from "./CorporateTestimonial/ICorporateTestimonialProps";
import { CorporateTestimonial } from "./CorporateTestimonial/index";

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
