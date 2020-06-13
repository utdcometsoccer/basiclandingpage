import * as React from "react";

export interface IAlbumFooterProps {
  children?: React.ReactNode;
}

export function AlbumFooter(props: IAlbumFooterProps): JSX.Element {
  const { children } = props;
  return (
    <footer className="text-muted">
      <div className="container">{children}</div>
    </footer>
  );
}
