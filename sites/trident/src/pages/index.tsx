import * as React from "react";
import { CorporateHeader, CorporateServices , CorporateTestimonials } from "@idahoedokpayi/basic-landing-page-components/src";
import { Layout } from "@idahoedokpayi/gatsby-theme-corporate-homepage/src/components/Layout";
import bg from "../img/business-district.jpg";
import pic1 from "../img/pic1.jpg";
import pic2 from "../img/pic2.jpg";
import logo from "../img/trident-color.svg";

const IndexPage = () => {
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
          buttonContent={"Learn More about us"}
          buttonHref={"/contact"}
          heading={"Intranet Product Consulting"}
          showButton={true}
          subheading={"Let's Build Something Great Together!"}
        />
        <CorporateServices
          services={[
            {
              children:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              serviceName: "SharePoint Development",
            },
            {
              children:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              serviceName: "Managed Services",
            },
            {
              children:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              serviceName: "Managed Services",
            },
          ]}
        />
        <CorporateTestimonials
          sectionHeader={"What are people saying about Basic Landing Pages?"}
          testimonials={[
            {
              children: "Basic Landing Pages are great",
              image: pic1,
            },
            {
              children:
                "Stylish landing Pages to help you build in Gatsby or plain old React!",
              image: pic2,
            },
          ]}
        />
      </React.Fragment>
    </Layout>
  );
};
export default IndexPage;
