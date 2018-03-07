import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Add from './Add';
import View from './View';

class App extends React.Component {
  constructor() {
    super();
    this.refreshFortune = this.refreshFortune.bind(this);

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
    var fortuneItem = {
      fortuneStr: "you will have a good day",
      id: "11111",
      timestamp: new Date().toISOString(),
      author: "corean"
    }
    console.log(fortuneItem);
    const fortune = {...this.state.fortune};
    //set state
    this.setState({ fortune: fortuneItem});
  }
  

/*
  addFortune(fortune){
    console.log("add fortune called");
    //update our state
    //make a copy of our state first//
    const fortunes = {...this.state.fortunes};
    //add in our new fish
    fortune = fortune;

    //set state
    this.setState({fortune: fortune});
    console.log(fortune);
  }
  */

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => (<View {...props} fortune={this.state.fortune} />)}/> />
          <Route path="/add" render={(props) => (<Add {...props}  />)}/>
        </Switch>

      </div>
    );
  }
}

export default App;
