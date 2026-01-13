import React from 'react'
import Container from '../../components/Container'
import GooglePlayStore from '../../assets/icons/GooglePlayStore'
import AppleStore from '../../assets/icons/AppleStore'

const Solution = () => {
  return (
    <section>
        <Container className='px-6 mb-[112px]'>
            <div className='bg-[#563ACC] min-h-[406px] rounded-2xl '>
                <div>
                    <h2 className='font-bold text-[40px] text-white w-full max-w-[566px]'>One Solution for All Your Cross-Border Payments</h2>
                    <div className='flex gap-4 mt-6'>
                        <GooglePlayStore />
                        <AppleStore /> 
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Solution