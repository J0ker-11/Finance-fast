import React from 'react'
import Container from '../../components/Container'
import Phone from '../../assets/images/iPhone 13 Pro3.png'

const SeamlessSection = () => {
  return (
    <section className='w-full bg-white satoshi'>
        <Container className='px-6 mb-[54px] md:mb-22'>
            <div className='flex flex-col justify-center items-center text-center '>
                <h2 className=' text-[10px] md:text-sm font-bold uppercase text-[#6364FF]  '>Easily Receive & Request</h2>
                <h1 className=' text-[40px] md:text-2xl font-bold w-full max-w-[622px] md:mt-4 mt:mb-3 my-3  '>Experience Seamless Money Transfers</h1>
                <p className=' text-sm md:text-base font-normal w-full max-w-[622px]  '>Simplify Your Money Management with Receive & Request Payments</p>
            </div>

            <div className='flex  flex-col md:flex-row items-center gap-[33px] justify-center mt-22 '>
              <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consectetur, provident hic unde commodi dignissimos dolore debitis beatae et ea?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consectetur, provident hic unde commodi dignissimos dolore debitis beatae et ea?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consectetur, provident hic unde commodi dignissimos dolore debitis beatae et ea?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consectetur, provident hic unde commodi dignissimos dolore debitis beatae et ea?</p>
              </div>

               <div className="flex flex-col md:flex-row gap-[10px] items-center">
            <span className="md:h-full w-full h-1 md:w-1  bg-gray-200 rounded-full"></span>
            <span className="font-bold text-sm md:text-lg text-[#3A3A3A]">VS</span>
            <span className="md:h-full w-full h-1 md:w-1 bg-gray-200 rounded-full"></span>
          </div>

              <div className=' w-full max-w-[618px] flex flex-col justify-center items-center pt-8 md:pt-12 pb-10 md:pb-8 rounded-lg bg-[#F6DDFD]  '>
                <div className='mx-auto'>
                <img src={Phone} alt="Iphone" className=' max-w-[250px] object-cover  mx-auto' />
                </div>

                <div className='px-4 md:px-8 mt-6 md:mt-10'>
                  <h2 className='font-bold text-xl md:text-[32px]'>Effortless Payments</h2>
                  <p className='w-full max-w-[459px] mt-2 text-sm text-[#3A3A3A] md:text-base'>Simplify Your Money Management with Receive & Request Payments on FinanceFast.</p>
                </div>

              </div>
            </div>
        </Container>
    </section>
  )
}

export default SeamlessSection