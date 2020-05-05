import * as React from "react";
import { CorporateHeader } from "@idahoedokpayi/basic-landing-page-components/src";
import { Layout } from "@idahoedokpayi/gatsby-theme-corporate-homepage/src/components/Layout";
import logo from "../img/trident-color.svg";
import bg from "../img/business-district.jpg";

const NotFoundPage = () => {
  var orgName = "Trident Professional Services";
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
      pageName={"Home"}
      socialNavigation={[
        { children: "facebook", path: "#" },
        { children: "twitter", path: "#" },
      ]}
    >
      <React.Fragment>
        <CorporateHeader
          backgroundImage={bg}
          heading={"Not Found"}
          showButton={false}
          subheading={"You are trying to access a page that does not exist."}
        />
      </React.Fragment>
    </Layout>
  );
};
export default NotFoundPage;