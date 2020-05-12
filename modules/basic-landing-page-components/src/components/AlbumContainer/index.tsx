import * as React from "react";

export interface IAlbumContainerProps {
  children?: JSX.Element | string;
}

export function AlbumContainer(props: IAlbumContainerProps): JSX.Element {
  const { children } = props;
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </div>
  );
}
