import React from 'react'
import Container from '../../components/Container'

const SeamlessSection = () => {
  return (
    <section className='w-full bg-white satoshi'>
        <Container className='px-6'>
            <div className='flex flex-col justify-center items-center text-center'>
                <h2 className=' text-[10px] md:text-sm font-bold uppercase text-[#6364FF] '>Easily Receive & Request</h2>
                <h1 className=' text-[40px] md:text-2xl font-bold w-full max-w-[622px]  '>Experience Seamless Money Transfers</h1>
                <p className=' text-sm md:text-base font-normal w-full max-w-[622px]  '>Simplify Your Money Management with Receive & Request Payments</p>
            </div>
        </Container>
    </section>
  )
}

export default SeamlessSection