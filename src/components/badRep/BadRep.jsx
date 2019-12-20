import React, { Component } from 'react';
import MyButton from '../myButton/MyButton';
import {  Modal, ModalBody, Col, Row, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BadRep.css';

export default class GoodRep extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
    };
  }
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalBody className="modalBadStyle">
          <Row>
            <Col>
              <FontAwesomeIcon icon={['fas','times']} className='CrossBad'/>
            </Col>
          </Row>
          <Row>
            <Col>
              {this.props.goodAnswer} 
            </Col>
          </Row>
          <Row>
            <Col>
              <MyButton className="Btn-answer" text="Next Player" url='/choose-category' />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    );
  }
}