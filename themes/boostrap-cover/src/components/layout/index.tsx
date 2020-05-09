import { CoverPage } from "@idahoedokpayi/basic-landing-page-components/src";
import "bootstrap/scss/bootstrap.scss";
import * as React from "react";
import "./cover.scss";

export interface ILayoutProps {
  children?: JSX.Element;
  footer?: JSX.Element;
  navigation?: JSX.Element;
}

export function Layout(props: ILayoutProps): JSX.Element {
  const { children, footer, navigation } = props;
  return (
    <CoverPage footer={footer} navigation={navigation}>
      {children}
    </CoverPage>
  );
}
