CorporateHomePage :

```jsx
import * as React from "react";
import { CorporateFooter } from "../CorporateFooter";
import { CorporateHeader } from "../CorporateHeader";
import { CorporateNavigation } from "../CorporateNavigation";
import { CorporateServices } from "../CorporateServices";
import { CorporateTestimonials } from "../CorporateTestimonials";
import {logo, pic1, pic2} from "@idahoedokpayi/basic-landing-page-images";
var orgName = "Trident Professional Services";
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
      image:pic1,
    },
    {
      children: "Stylish landing Pages to help you build in Gatsby or plain old React!",
      image:pic2,
    }
  ]}
/>
    </React.Fragment>
  }
</CorporateHomePage>;
```