const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;

  return (
    <div className="w-full">
      <div className="relative z-10 rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
        <div className="flex items-center justify-between">
          <h3 className="price mb-2 text-[22px] font-bold text-black dark:text-white">
            <span className="amount">{price}</span>
          </h3>
          <h4 className="text-md mb-2 text-dark dark:text-white">
            {packageName}
          </h4>
        </div>
        <p className="mb-7 text-base text-body-color">{subtitle}</p>
        <p className="mb-7 text-base text-body-color">
          Please check back for future opportunities. In the meantime, you can
          submit your resume and portfolio using the form in the footer below.
          We will keep your information on file and reach out when a suitable
          position becomes available. Thank you for your interest in joining
          COT.
        </p>

        <div>{children}</div>
        {/* <div className="mb-8 border-t border-body-color border-opacity-10 pt-8 dark:border-white dark:border-opacity-10">
          <p className="mb-4 text-base font-medium text-body-color">
            Submit Your Resume with the file name as your name.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <div className="flex-grow sm:w-full sm:flex-grow-0">
                <input
                  id="file-input"
                  type="file"
                  className="w-full rounded-sm bg-black px-2 py-2 text-base font-medium text-white shadow-submit duration-300 hover:bg-black/90 dark:bg-white/10 dark:shadow-submit-dark dark:hover:bg-white/5"
                />
              </div>
              <div className="mt-2 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full rounded-sm bg-primary px-4 py-2 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark sm:w-auto"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div> */}
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
