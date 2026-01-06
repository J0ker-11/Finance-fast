import React from "react";
import Container from "../../components/Container";
import Group8 from "../../assets/images/Group 8.png";

const ExchangeRate = () => {
  return (
    <section className="w-full bg-white satoshi py-20 md:py-[124px]">
      <Container className="flex flex-col justify-center items-center px-6">
        <div className="text-center mb-22">
          <h1 className="uppercase text-[#6364FF] font-bold text-[10px] md:text-sm mb-3 md:mb-4">
            real-time exchange rate
          </h1>

          <h2 className="font-bold text-2xl md:text-[40px] w-full max-w-[500px] leading-7 md:leading-12 mx-auto mb-3">
            Effortlessly Convert Currency
          </h2>

          <p className="hidden md:block font-normal text-base text-[#3A3A3A] w-full max-w-[560px] leading-[26px] ">
            Convert your currency from Pounds to Naira or Naira to Dollars.
            Convert Currency Anytime, Anywhere with FinanceFast's Seamless and
            Efficient Service.
          </p>

          <p className=" md:hidden font-normal text-sm text-[#3A3A3A] w-full max-w-[342px] leading-[22px] ">
            Convert your currency from Pounds to Naira or Naira to Dollars.
            Convert Currency Anytime,
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-[117px]">
          <div className=" w-full  max-w-[618px] max-h-[493px] bg-[#F1DDFF] px-8 pb-6 pt-[53px] rounded-3xl">
            <div className="mx-auto">
              <img
                src={Group8}
                alt="Group8"
                className="max-w-[458px] w-full object-cover mx-auto mb-10"
              />
            </div>
            <div className=" items-start justify-start">
            <div className="">
              <h2 className=" font-bold text-xl md:text-[32px] mb-2  ">
                Zero Hidden Fees
              </h2>
              <p className="font-normal text-sm md:text-base text-[#3A3A3A] w-full max-w-[459px] ">
                Get the Best Exchange Rates with FinanceFast: Convert Currency
                Hassle-Free, Instantly and Without Fees.
              </p>
            </div>
            </div>
          </div>

          <div className="flex  md:flex-col gap-[10px] items-center">
            <span className="md:h-full w-full h-1 md:w-1  bg-gray-200 rounded-full"></span>
            <span className="font-bold text-sm md:text-lg text-[#3A3A3A]">VS</span>
            <span className="md:h-full w-full h-1 md:w-1 bg-gray-200 rounded-full"></span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExchangeRate;
