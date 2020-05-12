import * as React from "react";
export interface IAlbumCardTextProps {
  children?: JSX.Element | string;
}

export function AlbumCardText(props: IAlbumCardTextProps): JSX.Element {
  const { children } = props;
  return <div className="card-body">{children}</div>;
}
