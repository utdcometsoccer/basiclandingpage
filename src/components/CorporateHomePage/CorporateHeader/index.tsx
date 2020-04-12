import * as React from "react";

export interface ICorporateHeaderProps{
  backgroundImage?:string;
  buttonAction?:(event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
  buttonContent?:JSX.Element;
  heading:string;
  showButton?:boolean;
  subheading?:string;
}

export function CorporateHeader(props: ICorporateHeaderProps): JSX.Element {
  const {
    backgroundImage,
    buttonAction,
    buttonContent,
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
                <button type="button" className="btn btn-primary" onClick={buttonAction}>{buttonContent}</button>
              ) : undefined}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
