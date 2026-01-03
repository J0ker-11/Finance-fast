import React from 'react'

const Container = ({className="", children}) => {
  return (
    <section className={`w-full max-w-7xl mx-auto  ${className}`}>
        {children}
    </section>
  )
}

export default Container