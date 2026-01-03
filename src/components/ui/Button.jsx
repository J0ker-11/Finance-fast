import React from 'react'

const Button = ({children, onClick, className= "", type= "button", icon: Icon }) => {
  return (
    <button 
    type={type}
    onClick={onClick}
    className={`${className}`}
    >
        {Icon && <Icon />}
        {children}
    </button>
  )
}

export default Button