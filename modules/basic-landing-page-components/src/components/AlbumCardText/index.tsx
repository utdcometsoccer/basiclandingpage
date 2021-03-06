import * as React from "react";
export interface IAlbumCardTextProps {
  children?: React.ReactNode;
}

export function AlbumCardText(props: IAlbumCardTextProps): React.ReactElement {
  const { children } = props;
  return <div className="card-body">{children}</div>;
}
