import * as React from "react";

export interface IAlbumCardBodyProps {
  children?: React.ReactNode;
}

export function AlbumCardBody(props: IAlbumCardBodyProps): React.ReactNode {
  const { children } = props;
  return <div className="card-body">{children}</div>;
}
