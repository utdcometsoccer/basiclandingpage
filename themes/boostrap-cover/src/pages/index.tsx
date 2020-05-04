import * as React from "react";
import { CoverNavigation, CoverTitle , SampleContent} from "@idahoedokpayi/basic-landing-page-components/src";
//import "bootstrap/scss/bootstrap.scss";
//import "../components/CoverPage/cover.scss"
import { Layout } from "../components/layout";
const IndexPage = () => (
  <Layout
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
  </Layout>
);
export default IndexPage;
