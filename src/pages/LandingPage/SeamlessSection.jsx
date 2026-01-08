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

            <div className='flex items-center gap-[33px] '>
              <div>

              </div>

              <div>
                <span></span>
                <span>VS</span>
                <span></span>
              </div>

              <div className=' w-full max-w-[618px] py-12 rounded-lg bg-[#F6DDFD]  '>
                <div>
                <img src={Phone} alt="Iphone" className='w-[314px] object-cover  mx-auto' />
                </div>

                <div className='px-8 mt-10'>
                  <h2>Effortless Payments</h2>
                  <p>Simplify Your Money Management with Receive & Request Payments on FinanceFast.</p>
                </div>

              </div>
            </div>
        </Container>
    </section>
  )
}

export default SeamlessSection