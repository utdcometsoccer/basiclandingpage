import * as React from "react";
import { CorporateFooter } from "../components/CorporateFooter";
import { CorporateHeader } from "../components/CorporateHeader";
import { CorporateHomePage } from "../components/CorporateHomePage";
import { CorporateNavigation } from "../components/CorporateNavigation";
import { CorporateServices } from "../components/CorporateServices";
import { CorporateTestimonials } from "../components/CorporateTestimonials";
import pic1 from "../img/pic1.jpg";
import pic2 from "../img/pic2.jpg";
import logo from "../img/trident-color.svg";

const IndexPage = () => {
  var orgName = "Trident Professional Services";
  return (
    <CorporateHomePage
      navigation={
        <CorporateNavigation
          brand={orgName}
          brandHome={"#"}
          logo={logo}
          navigationItems={[
            { active: true, children: "Home", path: "#" },
            { children: "About", path: "#" },
            { children: "Contact", path: "#" },
          ]}
        />
      }
      footer={
        <CorporateFooter
          footerMenus={[
            {
              navigationItems: [
                { children: "About", path: "#" },
                { children: "Contact", path: "#" },
              ],
            },
            {
              navigationItems: [
                { children: "facebook", path: "#" },
                { children: "twitter", path: "#" },
              ],
            },
          ]}
          organizationName={orgName}
        />
      }
    >
      {
        <React.Fragment>
          <CorporateHeader
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
      }
    </CorporateHomePage>
  );
};
export default IndexPage;