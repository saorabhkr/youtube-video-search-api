import React, { Component } from 'react'

export default class SearchBar extends Component {
  //State is a plain Javascript function which exists in class based component
  //to reacord a state
  // create a constructor
  constructor(props) {
    super(props);
    this.state = { term : '' };
  }
  render(){
      return(
        <div className="col-sm-12">
          <input className="search-bar"
            value={this.state.term}
            onChange={ event => this.onInputChnage(event.target.value )} />
        </div>
      )
  }
  onInputChnage(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
