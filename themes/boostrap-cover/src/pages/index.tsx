import * as React from "react";
import { CoverNavigation } from "../components/CoverNavigation";
import { CoverPage } from "../components/CoverPage";
import { CoverTitle } from "../components/CoverTitle";
import { SampleContent } from "../components/SampleContent";
import "bootstrap/scss/bootstrap.scss";
import "../components/CoverPage/cover.scss"
const IndexPage = () => (
  <CoverPage
    footer={
      <p>
        Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by{" "}
        <a href="https://twitter.com/mdo">@mdo</a>.
      </p>
    }
    navigation={
      <CoverNavigation
        brand={<CoverTitle>Cover</CoverTitle>}
        navigation={[
          { active: true, children: "Home", url: "#" },
          { children: "Features", url: "#" },
          { children: "Contact", url: "#" },
        ]}
      />
    }
  >
    <SampleContent />
  </CoverPage>
);
export default IndexPage;
