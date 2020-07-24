import React from 'react';

const Photo = (props) => {
  return(
    <div className='photo-container'>
      <img src={props.url} alt=""/>
    </div>
  )
}

export default Photo;