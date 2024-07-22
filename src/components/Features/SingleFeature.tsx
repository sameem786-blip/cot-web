import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, service_a, service_b, service_c, service_d, service_e, service_f } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <table className="w-full">
    <tbody>
      <tr>
        <td className="pr-[10px] py-[5px]">» {service_a}</td>
        <td className="pl-[10px] py-[5px]">» {service_b}</td>
      </tr>
      <tr>
      {service_c ? (
          <>
          
          <td className="pr-[10px] py-[5px]">» {service_c}</td>
          </>
        ) : (
          <>
          </>
        )} 
        {service_d ? (
          <>
          <td className="pl-[10px] py-[5px]">» {service_d}</td>
          </>
        ) : (
          <>
          </>
        )} 
      </tr>
      <tr>
        {service_e ? (
          <>
          
          <td className="pr-[10px] py-[5px]">» {service_e}</td>
          </>
        ) : (
          <>
          </>
        )} 
        {service_f ? (
          <>
          <td className="pl-[10px] py-[5px]">» {service_f}</td>
          </>
        ) : (
          <>
          </>
        )} 
        {/* <td className="pr-[10px] py-[5px]">» {service_e}</td>
        <td className="pl-[10px] py-[5px]">» {service_f}</td> */}
      </tr>
    </tbody>
  </table>
        {/* <div className="pr-[10px] text-base font-medium leading-relaxed text-body-color" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start", gap: "50px"}}>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">» {service_a}</p>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">» {service_b}</p>
        </div>
        <div className="pr-[10px] text-base font-medium leading-relaxed text-body-color" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start", gap: "50px"}}>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">» {service_c}</p>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">» {service_d}</p>
        </div> */}
        {/* <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p> */}
      </div>
    </div>
  );
};

export default SingleFeature;
