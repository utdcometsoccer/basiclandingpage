import { CorporateHeader } from "@idahoedokpayi/basic-landing-page-components";
import { bg } from "@idahoedokpayi/basic-landing-page-images";
import * as React from "react";
import { TridentLayout } from "../components/tridentlayout";
const ContactPage = () => {
  var orgName = "Trident Professional Services";
  return (
    <TridentLayout orgName={orgName} pageName={"Contact"}> 
      <React.Fragment>
        <CorporateHeader
          backgroundImage={bg}
          heading={"Contact Us"}
          showButton={false}
        />
        <div className="container">
          <div className="col">
            <form>
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" className="form-control" id="fullname" />
              </div>
              <div className="form-group">
                <label htmlFor="contactemail">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="contactemail"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    </TridentLayout>
  );
};
export default ContactPage;
