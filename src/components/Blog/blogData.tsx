import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    redirect: new URL('http://escrowbridge.pk/'), 
    title: "Escrow Bridge",
    paragraph:
      "A Blockchain web app built for introducing escrow payments to the Pakistani E-commerce marketplace.",
    image: "/images/blog/project1.jpg",
    author: {
      name: "Bilal Khan",
      image: "/images/testimonials/auth-02.png",
      designation: "CEO @ EscrowBridge.pk",
    },
    tags: ["Blockchain Web Application"],
    publishDate: "2025",
  },
  {
    id: 2,
    redirect: new URL('https://verkpro.com/'),
    title: "VerkPro",
    paragraph:
      "A Human Resource management platform that advances your job search and lands you your dream job.",
    image: "/images/blog/project2.jpg",
    author: {
      name: "ZainUddin",
      image: "/images/blog/author-02.png",
      designation: "CEO @ VerkPro",
    },
    tags: ["Web Application"],
    publishDate: "2025",
  },
  
];
export default blogData;
