import { CoverPage } from "@idahoedokpayi/basic-landing-page-components";
import "bootstrap/scss/bootstrap.scss";
import * as React from "react";
import "./cover.scss";

export interface ILayoutProps {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  navigation?: React.ReactNode;
}

export function Layout(props: ILayoutProps): React.ReactElement {
  const { children, footer, navigation } = props;
  return (
    <CoverPage footer={footer} navigation={navigation}>
      {children}
    </CoverPage>
  );
}
