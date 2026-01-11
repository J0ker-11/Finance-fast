import React, { useState } from 'react'
import Container from '../../components/Container'

const Faqs = () => {

    const [openIndex, setOpenIndex] = useState(null);


    const faqs = [
        {
          question: "How does FinanceFast work?",
          answer:
            "FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.",
        },
        {
          question: "Is it safe to use FinanceFast?",
          answer:
            "Yes, we use strong security and encryption to protect your data.",
        },
        {
          question: "Can I track my transfer?",
          answer:
            "Yes, you can track your transfer in real time.",
        },
      ];

      const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };



  return (
    <section>
        <Container className='flex justify-center items-center text-center  mt-[112px] mb-[124px] '>
            <div>
                <h2>FAQS</h2>
                <div>
                    <p>Got questions?</p>
                    <p>Get the answers to your questions about FastFinance.</p>
                </div>

                <div className=" min-w-[719px]">
      {faqs.map((item, index) => (
        <div key={index} className="border-b py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between w-full text-left font-medium"
          >
            {item.question}
            <span className='text-gray-400'>{openIndex === index ? "▲" : "▼"}</span>
          </button>

          {openIndex === index && (
            <p className="mt-3 text-left w-full max-w-[719px] text-gray-600 font-normal text-base ">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
     </div>

            
        </Container>
    </section>
  )
}

export default Faqs