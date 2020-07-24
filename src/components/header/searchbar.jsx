import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }
  handleSubmit(){
    // history.push(`/photos/${query}`);
    // window.location.hash = `#/photos/${query}`;
    let { fetchPhotos } = this.props;
    let { query } = this.state;
    let splitQuery = query.split(" ");
    let formattedQuery = splitQuery.join(",");
    fetchPhotos(formattedQuery);
  }
  update(e){
    this.setState({ query: e.currentTarget.value });
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit} className='searchbar-container'>
        <input type="text" value={this.state.query} onChange={this.update} className='searchbar-input'/>
        <button type="submit" className='searchbar-submit'><p>Go</p></button>
      </form>
    )
  }
}

export default withRouter(SearchBar);