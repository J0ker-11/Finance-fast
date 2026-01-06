import React from 'react'
import Container from '../../components/Container'

const CrossBorder = () => {
  return (
    <section className='w-full bg-white satoshi pt-16 pb-[54px] md:pt-[112px] md:pb-[124px]'>
        <Container className='flex flex-col px-6 justify-center items-center'>
            <div className=' text-center'>
                <h1 className='text-[#6364FF] font-bold text-[10px] uppercase md:text-sm mb-4 '>
                Cross-Border Transactions
                </h1>

                <h2 className=' font-bold text-2xl md:text-[40px] w-full max-w-[622px] leading-7 md:leading-12 mx-auto mb-3 '>
                Say Goodbye to International Payment Hassles 
                </h2>

                <p className='font-normal hidden md:block text-base w-full max-w-[560px] text-[#3A3A3A]  '>
                Start your journey to hassle free Cross-Border Payments by downloading the FastFinance app from your iOS of Android store.
                </p>
                <p className='font-normal text-sm block md:hidden mx-auto  w-full max-w-[342px] text-[#3A3A3A]  '>
                Start your journey to hassle free Cross-Border Payments with FastFinance.
                </p>
            </div>

            <div className='px-[19px] py-[11px]'>
                <div className='flex'>

                </div>
            </div>
        </Container>
    </section>
  )
}

export default CrossBorder