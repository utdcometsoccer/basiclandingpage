import * as React from "react";

export interface ICorporateHeaderProps{
  backgroundImage?:string;
  buttonAction?:(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>void;
  buttonHref?:string;
  buttonContent?:JSX.Element|string;
  heading:string;
  showButton?:boolean;
  subheading?:string;
}

export function CorporateHeader(props: ICorporateHeaderProps): JSX.Element {
  const {
    backgroundImage,
    buttonAction,
    buttonContent,
    buttonHref,
    heading,
    showButton,
    subheading,
  } = props;
  const backgroundStyle =
    undefined !== backgroundImage
      ? { backgroundImage: `url(${backgroundImage})` }
      : undefined;
  return (
    <div className="container-fluid img-card-main" style={backgroundStyle}>
      <div className="content">
        <div className="row">
          <div className="card">
            <div className="card-body">
              <h1>{heading}</h1>
              <h2>{subheading}</h2>
              {showButton ? (
                <a href={buttonHref} className="btn btn-primary" onClick={buttonAction}>{buttonContent}</a>
              ) : undefined}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
