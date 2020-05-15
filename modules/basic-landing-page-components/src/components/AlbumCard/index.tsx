import * as React from "react";

export interface IAlbumCardProps {
  children?: JSX.Element | string;
  className?: string;
}

export function AlbumCard(props: IAlbumCardProps): JSX.Element {
  const { children, className } = props;
  return <div className={className || "card mb-4 shadow-sm"}>{children}</div>;
}
