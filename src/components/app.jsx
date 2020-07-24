import React from 'react';
import Header from './header/header';
import Body from './body/body';
import Photo from './photos/photo';
import PhotoRow from './photos/photo_row';
import $ from 'jquery';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      photos: null
    }
    this.fetchPhotos = this.fetchPhotos.bind(this);
  }
  fetchPhotos(query){
    debugger;
    let allPhotos = []
    return(
      $.ajax({
        method: "GET",
        url: `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=be94c90859c8dabe7a4e28ca2612300e&tags=${query}&safe_search=1&extras=url_s&per_page=&page=&format=json&nojsoncallback=1`
      }).then((res) => {
        debugger;
        let i = 0;
        let j = 0;
        let photosRow = [];
        while(i < 25){
          let photo = res.photos.photo[i];
          photosRow.push(<Photo url={photo.url_s} key={photo.id}/>)
          j += 1;
          i += 1;
          if(j === 5){
            allPhotos.push(<PhotoRow photos={photosRow}/>);
            photosRow = [];
            j = 0;
          }
        }
        if(photosRow.length !== 0){
          allPhotos.push(<PhotoRow photos={photosRow} key={i}/>)
        }
        debugger;
        this.setState({ photos: allPhotos });
      })
    )
  }
  render(){
    return(
      <div className="app-container">
        <Header fetchPhotos={this.fetchPhotos}/>
        <Body photos={this.state.photos}/>
      </div>
    )
  }
}

export default App;