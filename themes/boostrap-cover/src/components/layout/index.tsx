import * as React from "react";
import { CoverPage } from "@idahoedokpayi/basic-landing-page-components/src";

export interface ILayoutProps {
  children?: JSX.Element;
  footer?: JSX.Element;
  navigation?: JSX.Element;
}

import "bootstrap/scss/bootstrap.scss";
//import "../components/CoverPage/cover.scss";
export function Layout(props: ILayoutProps): JSX.Element {
  const { children, footer, navigation } = props;
  return (
    <CoverPage footer={footer} navigation={navigation}>
      {children}
    </CoverPage>
  );
}
