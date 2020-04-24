import * as React from "react";
import { ProductLandingPage } from "../components/ProductLandingPage";
import {
  ProductFooter,
  ProductFooterNavigation,
} from "../components/ProductFooter";
import { ProductNavigation } from "../components/ProductNavigation";
import {
  ProductHeadline,
  ProductHeadlineContainer,
  DarkProductHeadline,
  LightProductHeadline,
} from "../components/ProductHeadline";

const IndexPage = () => {
  var productLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      className="d-block mb-2"
      role="img"
      viewBox="0 0 24 24"
      focusable="false"
    >
      <title>Product</title>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
    </svg>
  );
  return (
    <ProductLandingPage
      footer={
        <ProductFooter logo={productLogo}>
          <ProductFooterNavigation
            footerNavigation={[
              {
                heading: "Heading",
                subMenuItems: [
                  { children: "Cool stuff", path: "#" },
                  { children: "Random feature", path: "#" },
                  { children: "Team Feature", path: "#" },
                  { children: "Stuff for developers", path: "#" },
                  { children: "Another one", path: "#" },
                  { children: "Last time", path: "#" },
                ],
              },
              {
                heading: "Resources",
                subMenuItems: [
                  { children: "Resource", path: "#" },
                  { children: "Resource name", path: "#" },
                  { children: "Another resource", path: "#" },
                  { children: "Final resource", path: "#" },
                ],
              },
            ]}
          />
        </ProductFooter>
      }
      navigation={
        <ProductNavigation
          logo={productLogo}
          navigation={[
            { children: "Tour", path: "#" },
            { children: "Product", path: "#" },
            { children: "Features", path: "#" },
            { children: "Enterprise", path: "#" },
            { children: "Support", path: "#" },
            { children: "Pricing", path: "#" },
            { children: "Cart", path: "#" },
          ]}
        />
      }
    >
      <React.Fragment>
        <ProductHeadline
          buttonContent={"Coming soon"}
          buttonHref={"#"}
          buttonVisible={true}
          headline={"Punny Headline"}
          headlineContent={<p>Intersting text here?</p>}
          secondaryHeadlineContent={<p>Intersting text here?</p>}
          subheading={
            "And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages"
          }
        />
        <ProductHeadlineContainer>
          <React.Fragment>
            <DarkProductHeadline
              headline={"Another headline"}
              subheading={"And an even wittier subheading."}
            >
              <p>Content Goes Here</p>
            </DarkProductHeadline>
            <LightProductHeadline
              headline={"Another headline"}
              subheading={"And an even wittier subheading."}
            >
              <p>Content Goes Here</p>
            </LightProductHeadline>
          </React.Fragment>
        </ProductHeadlineContainer>
      </React.Fragment>
    </ProductLandingPage>
  );
};
export default IndexPage;
