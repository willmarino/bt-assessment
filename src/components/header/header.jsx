import React from 'react';
import { withRouter } from 'react-router';
import SearchBar from './searchbar';

const Header = (props) => {
  return(
    <div className="header-container">
      <SearchBar fetchPhotos={props.fetchPhotos}/>
    </div>
  )
}

export default withRouter(Header);