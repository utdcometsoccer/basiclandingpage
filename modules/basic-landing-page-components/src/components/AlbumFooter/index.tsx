import * as React from "react";

export interface IAlbumFooterProps {
  children?: React.ReactNode;
}

export function AlbumFooter(props: IAlbumFooterProps): React.ReactNode {
  const { children } = props;
  return (
    <footer className="text-muted">
      <div className="container">{children}</div>
    </footer>
  );
}
