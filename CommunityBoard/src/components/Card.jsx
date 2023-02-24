import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={props.imgsrc} alt='photo' />
      </div>
      <div className='card-title'>
        <h3>{props.title}</h3>
        <h3>{props.address}</h3>
      </div>
      <div className='btn-container'>
        <a href={props.link} target="_blank">
          <button className='btn'>View Menu</button>
        </a>
      </div>
    </div>
  )
}

export default Card;