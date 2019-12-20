import React, { Component } from 'react';
import './Camembert.css';
import { Container, Row, Col } from 'reactstrap';

export default class Camembert extends Component {
  render() {
    return (
      <div>
        <Container className="container-camembert">
          <Row className="row-camembert-1">
            <Col className="col-camembert-title">
              <h3 className="player-title">{this.props.currentPlayer}</h3>
            </Col>
            <Col className="col-camembert-1">
              <div className="camembert-1">
              </div>
              <div className="camembert-2">
              </div>
            </Col>
            
          </Row>
          <Row className="row-camembert-2">
            <Col></Col>
            <Col className="col-camembert-2">
              <div className="camembert-3">
              </div>
              <div className="camembert-4">
              </div>
            </Col>
            
          </Row>

        </Container>
      </div>
    );
  }
}
