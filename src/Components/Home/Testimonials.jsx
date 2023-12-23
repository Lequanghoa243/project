import React from 'react'
import Card from '../Card/Card'
import { testimonials } from '../../data'
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {


  return (
    <section className='testimonials'>
      <div className='container testimonial_container'>
        <h1>What are they saying?</h1>
        <div className='testimonial_wrapper'>
          {testimonials.map(({ id,name, quote,courses, avatar }) => {
            return (
        <Card className="testimonial" key={id}>
        <div className='testimonial_icon'><ImQuotesLeft /></div>
          <p className='testimonial_quote'>{quote}</p>
          <div className='testimonial_avatar'>
            <img src={avatar} alt={name} /> 
            <div className="testimonial_info">
               <strong>{name}</strong>
               <small>{courses}</small>
              </div>
          </div>
          
        </Card>
        );
      })}
      </div>
      </div>
    </section>
  )
}

export default Testimonials