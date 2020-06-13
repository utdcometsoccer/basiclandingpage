import * as React from "react";

export interface IAlbumCardProps {
  children?: React.ReactNode;
  className?: string;
}

export function AlbumCard(props: IAlbumCardProps): React.ReactElement {
  const { children, className } = props;
  return <div className={className || "card mb-4 shadow-sm"}>{children}</div>;
}
