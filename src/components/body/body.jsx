import React from 'react';
import PhotoDisplay from './photo_display';

const Body = (props) => {
  return(
    <div className="body-container">
      <PhotoDisplay photos={props.photos}/>
    </div>
  )
}

export default Body;