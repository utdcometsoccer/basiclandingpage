import * as React from "react";
import { Layout } from "../Layout";
import { logo } from "@idahoedokpayi/basic-landing-page-images";

export interface ITridentLayoutProps {
  children?: JSX.Element;
  orgName: string;
}

export function TridentLayout(props: ITridentLayoutProps): JSX.Element {
  const { children, orgName } = props;
  return (
    <Layout
      brandHome={"/"}
      footerNavigation={[
        { children: "About", path: "/about" },
        { children: "Contact", path: "/contact" },
      ]}
      logo={logo}
      navigationItems={[
        { children: "Home", path: "/" },
        { children: "About", path: "/about" },
        { children: "Contact", path: "/contact" },
      ]}
      orgName={orgName}
      pageName={"Contact"}
      socialNavigation={[
        { children: "facebook", path: "#" },
        { children: "twitter", path: "#" },
      ]}
    >
      {children}
    </Layout>
  );
}
