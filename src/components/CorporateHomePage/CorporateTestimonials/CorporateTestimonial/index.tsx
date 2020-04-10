import * as React from "react";
import "bootstrap/scss/bootstrap.scss";
import "../../corporate-styles.css";
import { ICorporateTestimonialProps } from "./ICorporateTestimonialProps";

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
