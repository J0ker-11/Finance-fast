import React from "react";
import Container from "../../components/Container";

const Testimonials = () => {
  const testimonials = [
    {
      text: "FinanceFast made international transfers effortless and reliable.",
      name: "Jane Doe",
      company: "PayTech",
      avatar: "/avatar.png",
    },
    {
      text: "I've been using FinanceFast for a few months now and it's completely transformed the way I send money to my family abroad. The platform is so easy to use and transfers are always fast and secure.",
      name: "Carl Rowan",
      company: "Aglets Inc",
      avatar: "/avatar.png",
    },
    {
      text: "Fast, secure, and easy to use. Highly recommended.",
      name: "Mike Lee",
      company: "FinCorp",
      avatar: "/avatar.png",
    },
  ];

  return (
    <section className="w-full bg-white satoshi mt-[124px] mb-[112px]">
      <Container className="px-6">

        <div className="text-center mb-[72px]">
            <p className="uppercase text-[#6364FF] font-bold text-sm mb-4">Testimonials</p>
            <h2 className="font-bold text-[40px]  ">What Our Customers are Saying</h2>
        </div>


        <div className="flex gap-6 px-10 snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="snap-center min-w-[320px] md:min-w-[834px] bg-purple-100 rounded-3xl shadow py-22 flex flex-col justify-between"
            >
              {/* TEXT */}
              <p className="text-center mx-auto font-medium text-2xl text-gray-500 max-w-[642px] leading-relaxed">
                “{item.text}”
              </p>

              {/* DIVIDER */}
              <div className="my-8 h-px bg-purple-200" />

              {/* AUTHOR */}
              <div className="flex items-center justify-center gap-3">
                <img
                  src={item.avatar}
                  className="w-10 h-10 rounded-full"
                  alt={item.name}
                />
                <div>
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-600">{item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
