import React from 'react';

const PhotoRow = (props) => {
  return(
    <div className="photo-row-container">
      {props.photos}
    </div>
  )
}

export default PhotoRow;