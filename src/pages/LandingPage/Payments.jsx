import React from 'react'
import Container from '../../components/Container'
import bg from '../../assets/images/Group.png'
import frame1 from '../../assets/images/22.png'
import frame2 from '../../assets/images/Frame 14312.png'
import frame3 from '../../assets/images/Frame 14319.png'
import frame4 from '../../assets/images/Frame 14320.png'

const Payments = () => {
    // const name = "Leo Arome"
    // const initials = name.trim(" ").split(" ").map(word => word[0]).join(" ")



  return (
    <section>

{/* <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">
  {"Hassan Tijani"
    .trim(" ")
    .split(" ")
    .map(firstName => firstName[0])
    .join("")}
    <p>{initials}</p>
</div> */}




        <Container className='  px-6 text-white '>
            <div className='bg-[#5A5DF7] relative   min-h-[432px] flex flex-col md:flex-row justify-center items-center rounded-2xl '>
                <img src={bg} alt="bg" className='absolute top-0 right-0 min-h-[342px] md:h-full  ' />
                <div className='flex flex-col'>
                <h2 className=' font-bold md:text-[40px] w-full max-w-[729px] '>Make International Payments a Breeze with FinanceFast</h2>
                <div className='flex flex-col md:flex-row gap-4 md:gap-[54px] mt-6'>
                    <p> No hidden fees</p>
                    <p>Secure transactions</p>
                    <p>Fast transfers</p>
                </div>
                </div>
                <div className='mt-8 md:mt-0 flex flex-col'>
                    <div className='flex flex-col md:flex-row gap-[34px]'>
                        <img src={frame2} alt="frame1" className='md:w-[327px] w-[310px] '  />
                        <img src={frame1} alt="frame2" className='w-[58px] relative bottom-35 left-65 md:left-0 md:bottom-3' />
                    </div>
                    <img src={frame3} alt="frame3" className='md:w-[327px] w-[287px] my-[18px] relative left-6 md:left-25 '  />
                    <img src={frame4} alt="frame4" className='md:w-[327px] w-[310px] relative md:left-10' />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Payments