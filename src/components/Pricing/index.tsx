"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [hiring, setHiring] = useState(false);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        /> */}

        <div className="w-full">
          {/* <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div> */}
        </div>

        {hiring ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            <PricingBox
              packageName="Associate"
              price="Software Engineer"
              duration={isMonthly ? "mo" : "yr"}
              subtitle="Develop and maintain high-quality software solutions, collaborate with cross-functional teams, and contribute to code reviews and testing for innovative projects."
            >
              <OfferList
                text="Java, Python, C++, or JavaScript"
                status="active"
              />
              <OfferList
                text="Software development methodologies"
                status="active"
              />
              <OfferList
                text="data structures, algorithms, and object-oriented design principles"
                status="active"
              />
              <OfferList
                text="Git and collaborative development tools"
                status="active"
              />
              <OfferList
                text="Clean, efficient, and well-documented code, with a focus on best practices"
                status="active"
              />
              <OfferList
                text="Problem-solving skills, attention to detail, and a collaborative mindset"
                status="active"
              />
            </PricingBox>
            <PricingBox
              packageName="Associate"
              price="Cloud Engineer"
              duration={isMonthly ? "mo" : "yr"}
              subtitle="Lead 3D design projects, guide a team of designers, and deliver high-quality visual assets across various platforms."
            >
              <OfferList text="AWS, Azure, or Google Cloud" status="active" />
              <OfferList text="Terraform or CloudFormation" status="active" />
              <OfferList
                text="DevOps practices and tools like Docker and Kubernetes"
                status="active"
              />
              <OfferList
                text="Resource optimization for performance and cost efficiency"
                status="active"
              />
              <OfferList
                text="Networking / Security / Database"
                status="active"
              />
              <OfferList text="problem-solving skills" status="active" />
              <OfferList
                text="collaborative team-oriented mindset"
                status="active"
              />
            </PricingBox>
            <PricingBox
              packageName="Lead"
              price="3D Designer"
              duration={isMonthly ? "mo" : "yr"}
              subtitle="Oversee the creative direction and execution of 3D design projects, mentor a team of designers, and ensure the delivery of high-quality visual assets."
            >
              <OfferList
                text="Modeling / Texturing / Animation"
                status="active"
              />
              <OfferList
                text="Artistic skills and a keen eye for detail"
                status="active"
              />
              <OfferList
                text="Proven track record of leading and mentoring"
                status="active"
              />
              <OfferList
                text="Industry-standard rendering techniques and tools"
                status="active"
              />
              <OfferList
                text="Conceptualize and execute creative ideas"
                status="active"
              />
              <OfferList
                text="Meet deadlines in a fast-paced environment"
                status="active"
              />
            </PricingBox>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-1 lg:grid-cols-1">
            <PricingBox
              packageName=""
              price="Not Hiring Currently"
              duration={isMonthly ? "mo" : "yr"}
              subtitle="At Computing of Tomorrow (COT), we are committed to crafting tomorrow’s digital landscape with our exceptional team of professionals. Currently, we do not have any open positions, but we are always interested in connecting with talented individuals who share our vision."
            >
              <></>
            </PricingBox>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
