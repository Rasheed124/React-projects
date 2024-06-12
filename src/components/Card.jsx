import React from 'react'

const Card = ({children, bg='bg-gray-100'}) => {
  return (
    <div className={`rounded-lg p-6 shadow-md ${bg}`}>
      {children}
    </div>
  )
}

export default Card
