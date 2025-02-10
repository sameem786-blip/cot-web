import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Computing of Tomorrow",
  description: "",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="For any questions or to learn more about how Computing of Tomorrow (COT) can help your business, please contact us. We're ready to assist with your digital transformation needs."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
