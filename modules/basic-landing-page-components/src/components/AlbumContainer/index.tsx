import * as React from "react";

export interface IAlbumContainerProps {
  children?: React.ReactNode;
}

export function AlbumContainer(props: IAlbumContainerProps): React.ReactElement {
  const { children } = props;
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </div>
  );
}
