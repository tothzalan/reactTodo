import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Item extends React.Component{
  btnRun = () => {
  }
  render(){
    return(
      <Container>
        <Row>
        <Col className="col-8">
          <h3>{this.props.name}</h3>
        </Col>
        <Col>
          <Button onClick={() => this.props.finish()}>Finished</Button>
        </Col>
        <Col>
          <Button onClick={() => this.props.delete()}>Give up</Button>
        </Col>
        </Row>
      </Container>
    )
  }
}

export default Item;
