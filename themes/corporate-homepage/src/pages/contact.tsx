import * as React from "react";
import { Layout } from "../components/Layout";
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
      <iframe src="https://forms.office.com/Pages/ResponsePage.aspx?id=AX4-UfN9VEGRONOBUouKsOqVWf9BP1VEkyRep7lgUx5UQlk0QjdRWkJLOFczRVBVTzRDUTNTOTBWTS4u&embed=true"></iframe>
    </Layout>
  );
};
export default ContactPage;
