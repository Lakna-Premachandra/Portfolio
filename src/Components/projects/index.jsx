import React from "react";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaPhp,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiExpress, SiMysql, SiMongodb, SiDotnet } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import railway from "/images/railway.png";
import exploreSL from "/images/exploreSL.png";
import forYouImage from "/images/foryou.png";
import petShopImage from "/images/petshop1.png";
// import petShopImage2 from "/images/petshop2.png";
import restaurantImage from "/images/restaurant.png";
import appleiStore from "/images/appleiStore.png"

export default function Projects() {
  const data = [
    {
      id: 1,
      title: "Train seats booking website",
      description:
        "I developed a web application that empowers users to search for trains, book tickets, and manage train schedules and reservations. Leveraging my expertise in frontend technologies such as React.js, Bootstrap, Tailwind CSS, and SCSS, coupled with backend proficiency in .NET, I ensured a seamless user experience. By integrating SQL Server for efficient data management, I created a robust and user-friendly platform.",
      icons: [<IoLogoReact />, <SiDotnet />, <RiTailwindCssFill />,<FaSass/>, <SiMicrosoftsqlserver/>],
      src: railway,
      href: "https://github.com/Lakna-Premachandra/Train-Ticket-Booking-App.git"
    },
    {
      id: 2,
      title: "Explore Sri Lanka Website",
      description:
        "I contributed to the development of the Explore Sri Lanka Tourism Website, a user-friendly platform for discovering and booking tourism services in Sri Lanka. Using HTML, CSS, JavaScript, PHP, and MySQL, our team created an easy-to-use frontend and backend system. I played a significant role in developing the Explore Sri Lanka Website, focusing on the frontend aspects and database design. And there are 4 yser types customer, admin, Hotel and guides.",
      icons: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />,<FaPhp/>, <SiMysql/>],
      src: exploreSL,
      href: "https://github.com/IshanArdithya/ExploreSriLanka.git"
    },
    {
      id: 3,
      title: "Pet Care Shop App",
      description:
        "I developed an Android application serving as a bridge between pet owners and caregivers, facilitating caregiving requests for pets. Built using Java in Android Studio, the app allows customers to post caregiving requests, which caregivers can then view and confirm. It fosters communication between both parties and includes features for managing profiles and feedback.  MySQL is used as the database management system.",
      icons: [<FaJava />, <SiMysql />, <IoLogoAndroid />],
      src: petShopImage,
      href: "https://github.com/Lakna-Premachandra/pet_care_shop.git"
    },
    {
      id: 4,
      title: "The Outer Clove Website",
      description:
        "I developed The Outer Clove Restaurant's Food Ordering web app. Customers can easily browse and order dishes, make reservations, and leave feedback. And, administrators are equipped with tools to efficiently manage users, food categories, dishes, orders, and feedback. Using HTML, CSS, and JavaScript for the frontend, PHP for backend functionality, and MySQL for the database, I ensured a smooth experience for both users and administrators.",
      icons: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />,<FaPhp/>, <SiMysql/>],
      src: restaurantImage,
      href: "https://github.com/Lakna-Premachandra/Outer-Clove-Restaurant-Website.git"
    },
    {
      id: 5,
      title: "Apple iStore System",
      description:
        "I developed a versatile and user-friendly application with Java and Java Swing, aimed at enhancing product management, stock control, user administration, billing processes within AppleiStore. This application offers a seamless experience for employees across various tasks. Users securely log in with unique credentials, Two types of users, cashier and manager, each equipped with specific functionalities tailored to their roles. ",
      icons: [<FaJava />],
      src: appleiStore,
      href: "https://github.com/Lakna-Premachandra/Apple-iStore.git"
    },
    {
      id: 6,
      title: "4u-Shop-Website",
      description:
        "I contributed to the frontend development of the 4U Company E-Commerce Website, a collaborative team project. Our platform empowers users to seamlessly navigate through various products, login, and effortlessly complete purchases. Using HTML, CSS, and JavaScript, I dedicated myself to crafting an immersive and visually captivating frontend experience. Backend  was  implemented using PHP and MySQL. ",
      icons: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />,<FaPhp/>, <SiMysql/>],
      src: forYouImage,
      href: "https://github.com/Lakna-Premachandra/4u-website.git"
    },
  ];

  return (
    <>
      <div
        id="projects"
        className="max-w-5xl m-auto p-4 py-6 "
      >
        <h1 className="text-left text-2xl font-bold py-4"> Projects</h1>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-xs:grid-cols-1">
          {data.map((item) => {
            return (
              <div className="border border-blue-600 rounded-md shadow-md">
                <div className="w-full   h-40 flex m-auto">
                  <img
                    className="w-full rounded-t-md"
                    src={item.src}
                    alt=""
                  />
                </div>

                <div
                  key={item.id}
                  className="flex justify-center items-center flex-col gap-4 "
                >
                  <h3 className="font-semibold text-xl pt-4">{item.title}</h3>
                  <p className="text-sm leading-7 px-3">{item.description}</p>
                 
                </div>

                <div className="p-4">
                  <button className="flex justify-start gap-3 pb-3  text-3xl text-blue-600">
                    {item.icons}
                  </button>
                  <Link className="flex gap-1 " target='_blank' to={item.href} >
                    Open in Github <FiArrowUpRight className="size-5" />
                  </Link>
                  </div>

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
