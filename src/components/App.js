import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Add from './Add';
import View from './View';

class App extends React.Component {
  constructor() {
    super();
    this.refreshFortune = this.refreshFortune.bind(this);
    this.addFortune = this.addFortune.bind(this);
    /*this.handleErros = this.handleErrors.bind(this);*/

    // We start with a empty state. refreshFortune will populate it.
    this.state = {
      fortune: {}
    };
  }

  /* This function gets called once the constructor is done.
  So we call refreshFortune here (instead of the constructor).*/
  componentDidMount() {
    this.refreshFortune();
  }

  /* This function is responsible for getting a new
   fortune for us. For now, we have a mock fortune.
   But later, we will implement this function to go get a new
   fortune from the backend*/
  refreshFortune() {
    console.log("refreshing fortune...");
    fetch("http://localhost:4000/fortune")
    .then(data => data.json())
    .then(data => {
      console.log("new fortune fetched", data);
      this.setState({fortune: data});
    });
  }

  /*function handleErrors(response) {
    if (!response.ok){
      throw Error(response.statusText);
    }
     return response;
  }*/


  addFortune(fortune){
    console.log("add fortune called");
  /*  fetch("http://localhost:4000/fortune", {
      method: 'PUT',
      body: JSON.stringify(fortune),
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(handleErrors)
  .then(function(response){
    console.log("ok");
  })
  .catch(function(error){
    console.log(error);
  }); */

  }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => (<View {...props} refreshFortune={this.refreshFortune} fortune={this.state.fortune} />)}/> />
          <Route path="/add" render={(props) => (<Add {...props}  addFortune={this.addFortune} />)}/>
        </Switch>

      </div>
    );
  }
}

export default App;
