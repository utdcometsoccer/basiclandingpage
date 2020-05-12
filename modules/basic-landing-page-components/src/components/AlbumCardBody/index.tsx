import * as React from "react";

export interface IAlbumCardBodyProps {
  children?: JSX.Element | string;
}

export function AlbumCardBody(props: IAlbumCardBodyProps): JSX.Element {
  const { children } = props;
  return <div className="card-body">{children}</div>;
}
