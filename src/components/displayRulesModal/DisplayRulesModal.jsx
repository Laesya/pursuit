import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './RulesModal.css';

export default class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="warning" className='invokeRulesButton' onClick={this.toggle}><p className='getBold'>{this.props.buttonLabel}</p></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Wild Pursuit</ModalHeader>
          <ModalBody>
            <h3>The rules:</h3>
            <ul>
              <li><p>1. Be smart.</p></li>
              <li><p>2. ???</p></li>
              <li><p>3. Profit.</p></li>
            </ul>
            <p>Lorem Ipsum blabla.</p>
            <p>(Real content will be injected later, thanks for your understanding !)</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Back</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

