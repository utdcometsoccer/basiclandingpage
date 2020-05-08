import { CorporateHeader } from "@idahoedokpayi/basic-landing-page-components";
import * as React from "react";
import { Layout } from "../components/Layout";
import bg from "../img/business-district.jpg";
import logo from "../img/trident-color.svg";
import "./contact.css";
const ContactPage = () => {
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
      pageName={"Contact"}
      socialNavigation={[
        { children: "facebook", path: "#" },
        { children: "twitter", path: "#" },
      ]}
    >
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
    </Layout>
  );
};
export default ContactPage;
