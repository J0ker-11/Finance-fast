import React, { useState } from 'react'
import Container from './Container'
import Button from './ui/Button'
import Phone from '../assets/icons/Phone'
import Logo from '../assets/icons/Logo'
import Menu from '../assets/icons/MobileMenu'
import { X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }


    const navItems = [
        {title: "Blog", href: "#"},
        {title: "Company", href: "#"},
        {title: "Products", href: "#"}
    ]


  return (
    <section className='w-full bg-white pt-12 satoshi sticky top-0 left-0 z-30'>
        
        <Container className='flex justify-between px-6 items-center'>
            <div className='flex items-center gap-2'>
                <Logo />
               <h2 className='font-medium text-base md:text-2xl'> FinanceFast</h2>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex gap-12 items-center'>
            <ul className='flex gap-12 items-center cursor-pointer '>
                {navItems.map((items) => (
                    <li className='font-normal text-base hover:text-[#8f73cb] transition-colors duration-300 ease-in' key={items.title}>
                        <a href={items.href}>{items.title}</a>
                    </li>
                ))}
            </ul>
            <Button type='button' icon={Phone} className='bg-[#D8C6FF] rounded-full py-3 px-6 flex items-center cursor-pointer gap-1 font-medium text-lg'>
                Download
            </Button>
            </div>

             {/*  Mobile Menu */}
             <Button type='button'
               onClick={handleToggle} className='lg:hidden transition-all duration-700 ease-in-out cursor-pointer'>
            {
            isOpen ? <X /> : <Menu />}            
            </Button>            
        </Container>

                     {/* Mobile Navigation Menu */}
                     {isOpen && (
                 <div className='flex flex-col gap-6 pt-8 rounded-lg  min-h-screen items-center'>
                 <ul className='flex flex-col gap-6 items-center cursor-pointer'>
                     {navItems.map((items) => (
                         <li className='font-normal text-base' key={items.title}>
                             <a href={items.href}>{items.title}</a>
                         </li>
                     ))}
                 </ul>
                 <Button icon={Phone} className='bg-[#D8C6FF] rounded-full py-3 px-6 flex items-center gap-1 font-medium text-lg'>
                     Download
                 </Button>
                 </div>
            )}
    </section>
  )
}

export default Navbar