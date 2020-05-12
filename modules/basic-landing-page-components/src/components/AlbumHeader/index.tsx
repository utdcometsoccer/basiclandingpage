import * as React from "react";

export interface IAlbumNavLink {
  href?: string;
  children: string | JSX.Element;
}
export interface IAlbumHeaderProps {
  aboutText?: string;
  albumText?: string;
  children?: string | JSX.Element;
  contactNavigation?: IAlbumNavLink[];
  contactText?: string;
}

export function AlbumHeader(props: IAlbumHeaderProps): JSX.Element {
  const {
    aboutText,
    albumText,
    children,
    contactNavigation,
    contactText,
  } = props;
  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">{aboutText || "About"}</h4>
              <p className="text-muted">{children}</p>
            </div>
            {contactNavigation.length > 0 ? (
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">{contactText || "Contact"}</h4>
                <ul className="list-unstyled">
                  {contactNavigation.map(
                    (navItem: IAlbumNavLink, index: number) => (
                      <li key={`album-contact-nav${index}`}>
                        <a className="text-white" href={navItem.href || "#"}>
                          {navItem.children}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : undefined}
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              aria-hidden="true"
              className="mr-2"
              viewBox="0 0 24 24"
              focusable="false"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <strong>{albumText || "Album"}</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
