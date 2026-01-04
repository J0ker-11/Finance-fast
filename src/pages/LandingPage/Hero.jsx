import React from 'react'
import Container from '../../components/Container'
import Phone4 from '../../assets/images/TEASE OF CONTINUATION.png'
import Phone5 from '../../assets/images/Group 7.png'
import Button from '../../components/ui/Button'
import CompanyLogo1 from '../../assets/icons/CompanyLogo1'
import CompanyLogo2 from '../../assets/icons/CompanyLogo2'
import CompanyLogo3 from '../../assets/icons/CompanyLogo3'
import CompanyLogo4 from '../../assets/icons/CompanyLogo4'
import CompanyLogo5 from '../../assets/icons/CompanyLogo5'

const Hero = () => {
  return (
    <section className='w-full bg-white satoshi'>
        <Container className=' px-6 flex flex-col justify-center items-center min-h-screen pt-[79px] md:pt-[154px]'>
            
                {/* Hero Headings */}
            <h2 className='w-full max-w-[928px] text-center font-bold text-[32px] md:text-5xl leading-10 md:leading-[54px] '>
                Simplify your international Transaction with 
                <span className='text-[#6364FF]'> one platform</span>
            </h2>
            <p className='hidden md:block text-[#3A3A3A] font-normal text-lg w-full max-w-[644px] text-center mt-3 '>
                Say Goodbye to the hassles of Traditional Money Transfers. FinanceFast allows you effortlessly transfer money anywhere in the world with confidence and ease.
            </p>
            <p className='block md:hidden text-[#3A3A3A] font-normal text-base w-full max-w-[342px] text-center mt-3 '>
            Say Goodbye to the Hassles of Traditional Money Transfers. Effortlessly transfer with ease.
            </p>

            {/* Hero Button */}
            <div className='relative flex flex-col md:flex-row justify-center items-center w-full max-w-[498px] mt-10'>
                <input type="text" placeholder='+234' className='px-6 py-[14px] w-full text-sm font-normal md:text-lg   max-w-[498px] border border-gray-300 rounded-full '  />
                <Button className='w-full md:max-w-[173px] mt-4 md:mt-0 font-medium text-sm md:text-lg  md:absolute right-2 px-6 py-3 rounded-full text-white bg-[#563ACC]'>
                    Download
                </Button>
            </div>

              {/* Hero Images */}
              <div className='mt-[90px] w-full  md:mt-[148px] mx-auto flex gap-6'>
                <img src={Phone5} alt="Phone" className=' block md:hidden object-cover ' />
                <img src={Phone4} alt="Phone" className=' hidden md:block object-cover ' />
            </div>          
        </Container>

        {/* Sponsors */}
        <div className=' flex flex-col md:flex-row justify-center gap-[72px] py-[54px] items-center bg-[#E5DBFB] w-full mx-auto'>
                <div>
                    <p className='font-medium text-lg w-full max-w-[339px] text-[#3A3A3A] '>
                    We're have been recognized by Leading Finance Publications and Organizations.
                    </p>
                </div>

                <div className='flex items-center overflow-x-auto gap-[90px]'>
                    <CompanyLogo1 />
                    <CompanyLogo2 />
                    <CompanyLogo3 />
                    <CompanyLogo4 />
                    <CompanyLogo5 />
                </div>
                
            </div>

    </section>
  )
}

export default Hero