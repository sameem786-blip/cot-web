import { Feature } from "@/types/feature";
import Image from 'next/image'
import UIUXIcon from './../../../public/images/services/uiux.png'
import WebIcon from './../../../public/images/services/web.png'
import MobileIcon from './../../../public/images/services/mobile.png'
import BlockchainIcon from './../../../public/images/services/blockchain.png'
import CloudIcon from './../../../public/images/services/cloud.png'
import DmIcon from './../../../public/images/services/dm.png'

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image src={UIUXIcon} alt="UI/UX Icon" height={60} width={60} ></Image>
    ),
    title: "UI / UX",
    service_a: "Research & Analysis",
    service_b: "Wireframing",
    service_c: "Prototyping",
    service_d: "Responsiveness",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image src={WebIcon} alt="UI/UX Icon" height={60} width={60} ></Image>
    ),
    title: "Web Development",
    service_a: "Website",
    service_b: "Web Application",
    service_c: "E-Commerce",
    service_d: "Wordpress",
    service_e: "Shopify",
    service_f: "Wix",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image src={MobileIcon} alt="UI/UX Icon" height={60} width={60} ></Image>
    ),
    title: "Mobile App Development",
    service_a: "IOS Application",
    service_b: "Android Application",
    service_c: "Cross-Platform Application",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image src={BlockchainIcon} alt="UI/UX Icon" height={60} width={60} ></Image>
    ),
    title: "Blockchain Development",
    service_a: "Consultation",
    service_b: "D-App",
    service_c: "Integration",
    service_d: "Cryptocurrency",
    service_e: "Security",
    service_f: "Tokenization",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image src={CloudIcon} alt="UI/UX Icon" height={60} width={60} ></Image>
    ),
    title: "Cloud Solutions",
    service_a: "Infrastructure Service",
    service_b: "Platform Service",
    service_c: "Security Services",
    service_d: "DevOps",
    service_e: "Custom Solutions",
    service_f: "Migration & Integration",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image src={DmIcon} alt="UI/UX Icon" height={60} width={60} ></Image>
    ),
    title: "Quality Assurance",
    service_a: "Manual Testing",
    service_b: "Automated Testingg",
    service_c: "Performance Testing",
    service_d: "Security Testing",
    service_e: "Usability Testing",
    service_f: "QA Consulting and Audits",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
];
export default featuresData;
