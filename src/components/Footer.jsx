import React from "react";
import Container from "./Container";
import Button from "./ui/Button";
import Instagram from "../assets/icons/Instagram";
import Twitter from "../assets/icons/Twitter";
import Tiktok from "../assets/icons/Tiktok";
import Youtube from "../assets/icons/Youtube";

const Footer = () => {
  const footerSection = [
    {
      id: 1,
      title: "Company",
      href: ["About", "Contact", "Blog"],
    },

    {
      id: 2,
      title: "Product",
      desc: [ 
        "Money Conversation", 
        "International Transaction", 
        "International Transaction"],
    },

    {
      id: 3,
      title: "Legal",
      desc: ["Terms & Condition", "Privacy policy"],
    },

   /*  {
        id: 4,
        title: "Sign up for our newsletter"
    } */
  ];

  return (
    <section className="w-full text-black satoshi">
      <Container className="px-3">
        <div className="flex justify-between">
        <div className="grid grid-cols-2 lg:grid-cols-3  gap-10 last:gap-8 md:gap-[72px] ">
        {footerSection.map((item) => (
          <div key={item.id}>

            {/* Title */}
            <h2 className="font-bold text-lg md:text-xl mb-4">{item.title}</h2>

            {/* Links */}
            {item.href && (
              <ul>
                {item.href.map((link) => (
                  <li
                    className={` ${
                      item.title === "Company" ? "hover:text-[#D8C6FF]" : ""
                    } transition-colors duration-700 ease-in-out font-medium mb-3 text-sm md:text-base`}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            )}

            {/* Description */}
            {item.desc && (
                <ul>
                    {item.desc.map((desc) => (
                        <li className="font-medium mb-3 w-full text-[#3A3A3A] text-sm md:text-base">{desc}</li>
                    ))}
                </ul>
            )}

          </div>
        ))}
        </div>
        
            {/* Button */}
            <div className="hidden md:block">
                <h2 className="font-bold text-lg lg:text-xl mb-4">Sign up for our newsletter</h2>
                <div className="relative flex items-center justify-end ">
                <input type="text" placeholder="Enter Email" className="px-6 border min-w-[250px] lg:min-w-[498px] border-[#949494] outline-[#949494] py-[14px] rounded-full " />
                <Button className=" absolute right-[6px]  px-6 py-2 inline-flex justify-center items-center text-white font-medium text-lg bg-[#563ACC] rounded-full">Subscribe</Button>
            </div>
            </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col md:flex-row gap-6 justify-between mt-10 md:mt-[54px] ">
                <div className="flex gap-10">
                    <Instagram />
                    <Twitter />
                    <Tiktok />
                    <Youtube />
                </div>
                <p className="font-normal text-sm">&copy;2023 FinanceFast All Rights Reserved.</p>
            </div>
      </Container>
    </section>
  );
};

export default Footer;
