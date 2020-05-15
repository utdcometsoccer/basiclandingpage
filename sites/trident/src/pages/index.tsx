import { bg, pic1, pic2 } from "@idahoedokpayi/basic-landing-page-images";
import {
  CorporateHeader,
  CorporateServices,
  CorporateTestimonials,
  TridentLayout,
} from "@idahoedokpayi/gatsby-theme-corporate-homepage";
import * as React from "react";

const IndexPage = () => {
  var orgName = "Trident Professional Services";
  return (
    <TridentLayout orgName={orgName} pageName={"Home"}>
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
                "Our Skilled SharePoint Architect designs and implements custom solutions to your business problems.",
              serviceName: "SharePoint Development",
            },
            {
              children: "End to end IT services for your business.",
              serviceName: "Managed Services",
            },
            {
              children:
                "Our staff helps you migrate your applications to the cloud.",
              serviceName: "Cloud Applications",
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
    </TridentLayout>
  );
};
export default IndexPage;
