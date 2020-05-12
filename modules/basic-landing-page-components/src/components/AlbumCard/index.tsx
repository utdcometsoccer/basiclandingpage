import * as React from "react";

export interface IAlbumCardProps {
  children?: JSX.Element | string;
}

export function AlbumCard(props: IAlbumCardProps): JSX.Element {
  const { children } = props;
  return <div className="card mb-4 shadow-sm">{children}</div>;
}
