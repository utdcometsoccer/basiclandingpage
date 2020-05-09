import {
  bg,
  CorporateHeader,
  Layout,
  logo,
} from "@idahoedokpayi/gatsby-theme-corporate-homepage";
import * as React from "react";
import { useState, useEffect } from "react";
import "./contact.css";
import Popup from "reactjs-popup";

const ContactPage = () => {
  var orgName = "Trident Professional Services";
  const [showPopup, setShowPopup] = useState(true);
  const onPopupClose = () => setShowPopup(false);
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
            <h1>Thank you</h1>
            <p>
              We will schedule an appointment to
              discuss your needs as soon as possible.
            </p>
          </div>
        </div>
        <Popup
          open={showPopup}
          closeOnDocumentClick={true}
          onClose={onPopupClose}
        >
          <iframe src="https://forms.office.com/Pages/ResponsePage.aspx?id=AX4-UfN9VEGRONOBUouKsOqVWf9BP1VEkyRep7lgUx5UQlk0QjdRWkJLOFczRVBVTzRDUTNTOTBWTS4u&embed=true" />
        </Popup>
      </React.Fragment>
    </Layout>
  );
};
export default ContactPage;
