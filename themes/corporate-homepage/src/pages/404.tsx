import { CorporateHeader } from "@idahoedokpayi/basic-landing-page-components";
import { bg } from "@idahoedokpayi/basic-landing-page-images";
import * as React from "react";
import { TridentLayout } from "../components/tridentlayout";

const NotFoundPage = () => {
  var orgName = "Trident Professional Services";
  return (
    <TridentLayout orgName={orgName}>
      <React.Fragment>
        <CorporateHeader
          backgroundImage={bg}
          heading={"Not Found"}
          showButton={false}
          subheading={"You are trying to access a page that does not exist."}
        />
      </React.Fragment>
    </TridentLayout>
  );
};
export default NotFoundPage;
