import {
  CorporateHeader,
  CorporateServices,
  CorporateTestimonials,
} from "@idahoedokpayi/basic-landing-page-components";
import { bg, pic1, pic2 } from "@idahoedokpayi/basic-landing-page-images";
import * as React from "react";
import { TridentLayout } from "../components/tridentlayout";

const IndexPage = () => {
  var orgName = "Trident Professional Services";
  return (
    <TridentLayout orgName={orgName} pageName={"Home"}>
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
              avatar: <img src={pic1} alt={"stock image of some model"} />,
              children: "Basic Landing Pages are great"
            },
            {
              avatar:<img src={pic2} alt={"stock image of some model"} />,
              children:
                "Stylish landing Pages to help you build in Gatsby or plain old React!"
            },
          ]}
        />
      </React.Fragment>
    </TridentLayout>
  );
};
export default IndexPage;
