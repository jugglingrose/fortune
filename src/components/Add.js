import React from 'react'
import {Container, Row} from 'reactstrap';

class Add extends React.Component {
  constructor(){
   super();
    this.fortuneStrChange = this.fortuneStrChange.bind(this);
    this.authorChange = this.authorChange.bind(this);
    this.submitOnClick = this.submitOnClick.bind(this);

    this.state = {
    };

  }

  fortuneStrChange = (e) => {
    console.log("fortune change called");
    console.log(e.target.value);
    var fortuneStrChange = e.target.value;
    this.setState({fortuneStrChange: fortuneStrChange});
    console.log(this.state);
  }

  authorChange = (e) => {
    console.log("author change called");
    console.log(e.target.value);
    var authorChange = e.target.value;
    this.setState({authorChange : authorChange});
    console.log(this.state);
  }

  submitOnClick =(e) => {
    console.log("Submitting:", this.state);
  }




  render(){
    return(
    <div id="add-recipe-page">
        <div className="content">
          <Container fluid={true}>
            <form ref={(input) => this.form = input}>
              <Row>
                <input type="text" onChange={this.fortuneStrChange}  name="fortuneStr" value="Fortune"></input>
                <input type="text" onChange={this.authorChange} name="author" value="Author"></input>
              </Row>
              <Row>
                  <div className="text-center">
                    <button className="add-btn" type="button" onClick={this.props.addFortune}>SUBMIT</button>
                  </div>
            </Row>
          </form>
        </Container>
      </div>
    </div>
  )
  }

}

export default Add;
