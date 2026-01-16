import React from 'react'
import Container from '../../components/Container'
import GooglePlayStore from '../../assets/icons/GooglePlayStore'
import AppleStore from '../../assets/icons/AppleStore'
import Badge from '../../assets/icons/Badge'
import lines from '../../assets/images/lines.png'
import Phone from '../../assets/images/iPhone 13 Pro1.png'

const Solution = () => {
  return (
    <section>
        <Container className='px-6 mb-[112px]'>
            <div className='bg-[#563ACC] min-h-[406px] relative h-full rounded-2xl flex flex-col md:flex-row justify-center items-center '>
                <img src={lines} alt="lines" className='absolute top-0 left-0 min-h-[406px] ' />
                <div>
                    <h2 className='font-bold text-[40px] text-white w-full max-w-[566px]'>One Solution for All Your Cross-Border Payments</h2>
                    <div className='flex gap-4 mt-6'>
                        <GooglePlayStore />
                        <AppleStore /> 
                    </div>
                </div>
                <div className='  flex justify-center items-center'>    
                    <Badge />
                
                    <img src={Phone} alt="phone" className='w-[238px] md:w-[354px] mt-[56px] ' />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Solution