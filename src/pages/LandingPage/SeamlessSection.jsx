import React from "react";
import Container from "../../components/Container";
import Phone from "../../assets/images/iPhone 13 Pro3.png";

const SeamlessSection = () => {
  const money = [
    {
      id: 1,
      text: "X",
      title: "Expensive high fees and unfavorable exchange rates",
      style: ""
    },
    {
      id: 2,
      text: "X",
      title: "Transfer delay and inconvenience",
      style: ""
    },
    {
      id: 3,
      text: "X",
      title: "Fraud and loss of funds",
      style: ""
    },
    {
      id: 4,
      text: "X",
      title: "Traditional in-person transactions",
      style: ""
    },
    {
      id: 5,
      text: "X",
      title: "Limited payments method",
      style: ""
    },
    {
      id: 6,
      text: "X",
      title: "Lack of transparency",
      style: ""
    },
    {
      id: 7,
      text: "X",
      title: "Complex verification processes",
      style: ""
    },
    {
      id: 8,
      text: "X",
      title: "Long payments wait time",
      style: ""
    },
    {
      id: 9,
      text: "X",
      title: "Hidden costs",
      style: ""
    },
    {
      id: 10,
      text: "X",
      title: "Currency exchange rate",
      style: ""
    },
  ]



  return (
    <section className="w-full bg-white satoshi">
      <Container className="px-6 mb-[54px] md:mb-22">
        <div className="flex flex-col justify-center items-center text-center ">
          <h2 className=" text-[10px] md:text-sm font-bold uppercase text-[#6364FF]  ">
            Easily Receive & Request
          </h2>
          <h1 className=" text-[40px] md:text-2xl font-bold w-full max-w-[622px] md:mt-4 mt:mb-3 my-3  ">
            Experience Seamless Money Transfers
          </h1>
          <p className=" text-sm md:text-base font-normal w-full max-w-[622px]  ">
            Simplify Your Money Management with Receive & Request Payments
          </p>
        </div>

        <div className="flex  flex-col md:flex-row items-stretch justify-between gap-[33px] mt-22 ">
          
          <div className="">
            {money.map((items) => (
              <div key={items.id} className="flex items-center mb-5 ">
                 <p className={`font-normal text-sm md:text-base  ${items.id === 5 ? "border border-gray-500 rounded-full px-6 py-2 text-gray-400 bg-gray-100" : "text-gray-400"}`}><span className={`${items.id === 5 ? "text-red-500 text-sm md:text-base" : "text-gray-100"}`}>{items.text}</span>  {items.title}</p>
              </div>
            ))}
            
            <div>

            </div>
          </div>

           <div className="flex  md:flex-col gap-[10px] items-center">
            <div className="md:h-full w-full h-1 md:w-1  bg-gray-200 rounded-full"></div>
            <div className="font-bold text-sm md:text-lg text-[#3A3A3A]">VS</div>
            <div className="md:h-full w-full h-1 md:w-1 bg-gray-200 rounded-full"></div>
          </div>

          <div className=" w-full max-w-[618px] flex flex-col justify-center items-center pt-8 md:pt-12 pb-10 md:pb-8 rounded-lg bg-[#F6DDFD]  ">
            <div className="mx-auto">
              <img
                src={Phone}
                alt="Iphone"
                className=" max-w-[250px] object-cover  mx-auto"
              />
            </div>

            <div className="px-4 md:px-8 mt-6 md:mt-10">
              <h2 className="font-bold text-xl md:text-[32px]">
                Effortless Payments
              </h2>
              <p className="w-full max-w-[459px] mt-2 text-sm text-[#3A3A3A] md:text-base">
                Simplify Your Money Management with Receive & Request Payments
                on FinanceFast.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SeamlessSection;
