import React from 'react';
import './App.css';
import Item from './comps/Item';
import Chart from './comps/Chart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

class App extends React.Component{
  state = {
    data: [
      "Learn React",
      "Create a todo list",
      "Make it look better",
      "Put it on github"
    ],
    finishedData: [],
    givenUpData: [],
    input: '',
    numberOfFinishedActivities: 0,
    numberOfAllActivities: 0
  };
  componentDidMount(){
      this.setState({numberOfAllActivities: this.state.data.length});
  }
  deleteElement = (index) => {
    const list = this.state.data;
    this.setState({ givenUpData: [...this.state.givenUpData, list.splice(index, 1)] });
    this.setState({ data: list });
  }
  finishedElement = (index) => {
    const list = this.state.data;
    this.setState({ finishedData: [...this.state.finishedData ,list.splice(index, 1)] });
    this.setState({ data: list, numberOfFinishedActivities: this.state.numberOfFinishedActivities + 1 });
  }
  inputChange = (e) => {
    this.setState({ input: e.target.value });
  }
  addNewItem = () => {
    if(this.state.input.length > 2)
      this.setState({ data: [...this.state.data, this.state.input], input: '', numberOfAllActivities: this.state.numberOfAllActivities + 1});
  }
  render(){
    return (
    	<Container className="App">
        <Row className="col-12 center">
          <h1>TODO LIST</h1>
        </Row>
        <Row className="itemList">
          {this.state.data.length
            ? ""
            : <div className="col-12 center"><h2>You must be really productive <span role="img" aria-label="fire">🔥🔥</span></h2></div>
          }
          {this.state.data.map((data,i) => (
            <Item key={i} name={data} delete={() => this.deleteElement(i)} finish={() => this.finishedElement(i)}/>
          ))}
        </Row>

        <Row className="col-12 center ptop">
            <input value={this.state.input} onChange={this.inputChange} placeholder="Add new item"/>
            <Button onClick={this.addNewItem}>Add</Button>
        </Row>

        <Row className="col-12 center ptop">
          <h2>History:</h2>
        </Row>

        <br/>

        <Container className="col-12 center">
          <Container className="col-6">
            <h5>Finished:</h5>
            {this.state.finishedData.map((data,i) => (
              <p key={i}>{data}</p>
            ))}
          </Container>
          <Container className="col-6">
            <h5>Given up:</h5>
            {this.state.givenUpData.map((data,i) => (
              <p key={i}>{data}</p>
            ))}
          </Container>
        </Container>

        {this.state.givenUpData.length < 1 || this.state.finishedData.length < 1 ? "" :
          <Row className="ptop">
          <Chart  labels={["Finished", "Given up"]} dataset={[this.state.numberOfFinishedActivities, this.state.givenUpData.length]}/>
          </Row>
        }

      </Container>
    );
  }
}

export default App;
