import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const CareersPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers Page"
        description="For any questions or to learn more about how Computing of Tomorrow (COT) can help your business, please contact us. We're ready to assist with your digital transformation needs."
      />

      <Pricing />
    </>
  );
};

export default CareersPage;
