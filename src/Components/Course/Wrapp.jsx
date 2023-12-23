import React from 'react'

const Wrapp = ({className, children}) => {
  return (
    <article className= {`wrapper ${className}`}>
        {children}
    </article>
  )}

export default Wrapp