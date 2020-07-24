import React from 'react';
import { CSSTransition } from 'react-transition-group';

class PhotoDisplay extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      images: null,
    }
  }
  render(){
    let { photos } = this.props;
    return(
      <CSSTransition timeout={750} in={true} appear={true} classNames={"fast-fade"}>
        <div className='photos-display-container'>
          {photos}
        </div>
      </CSSTransition>
    )
  }
}

export default PhotoDisplay;















  // componentDidMount(){
  //   debugger;
  //   let { history } = this.props;
  //   if(history.location.pathname !== '/'){
  //     this.fetchPhotos(this.state.query);
  //   }
  // }
  // componentDidUpdate(prevProps){
  //   let oldQuery = prevProps.history.location.pathname.split("/")[2];
  //   let newQuery = this.props.history.location.pathname.split("/")[2];
  //   debugger;
  //   if(newQuery !== '/' && newQuery !== oldQuery){
  //     this.fetchPhotos(this.state.query);
  //   }
  // }
  // fetchPhotos(query){
  //   debugger;
  // }





      // let { images, loading } = this.state;
    // if(!images){
    //   if(loading){
    //     return <DefaultSpinner/>;
    //   }else{
    //     return null;
    //   }
    // }