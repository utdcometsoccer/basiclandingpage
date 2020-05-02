import * as React from "react";
import { CorporateHeader } from "../components/CorporateHeader";
import { CorporateServices } from "../components/CorporateServices";
import { CorporateTestimonials } from "../components/CorporateTestimonials";
import { Layout } from "../components/Layout";
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
          heading={"Intranet Product Consulting"}
          showButton={true}
          subheading={"Let's Build Something Great Together!"}
        />
        <CorporateServices
          services={[
            {
              children:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              serviceName: "Point 1",
            },
            {
              children:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              serviceName: "Point 2",
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
