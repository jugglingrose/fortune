import React from 'react';
import { Link } from 'react-router-dom';

class View extends React.Component{

  render(){
    return(
      <div>
        <h1>Here is your Fortune:</h1>
        <p>{this.props.fortune.desc}</p>
        <p>By: {this.props.fortune.author}</p>
        <button type="button" onClick={this.props.refreshFortune}>REFRESH</button>
        <Link to='/add'><button type="button"> ADD </button> </Link>
      </div>

    );
  }
}

export default View;
