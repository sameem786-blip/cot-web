import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Computing of Tomorrow"
        description="At Computing of Tomorrow (COT), we craft innovative digital solutions, specializing in web and mobile development, SEO, and QA services. Our team is dedicated to helping businesses thrive in the digital age. Let's build the future together."
      />
      <AboutSectionThree />
      <AboutSectionFour />
    </>
  );
};

export default AboutPage;
