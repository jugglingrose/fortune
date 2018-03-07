import React from 'react';

class View extends React.Component{

  render(){
    return(
      <div>
        <h1>Here is your Fortune:</h1>
        <p>{this.props.fortune.fortuneStr}</p>
        <p>By: {this.props.fortune.author}</p>
      </div>

    )
  }
}

export default View;
