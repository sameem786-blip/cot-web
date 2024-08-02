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
        pageName="Careers"
        description="At Computing of Tomorrow, we believe in crafting the digital landscape of the future with innovation, dedication, and a passion for excellence. Our team is at the heart of everything we do, driving forward our mission to deliver top-tier IT solutions that transform businesses and inspire growth."
      />

      <Pricing />
    </>
  );
};

export default CareersPage;
