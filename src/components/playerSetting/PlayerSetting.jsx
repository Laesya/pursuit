import React from 'react';
import './PlayerSetting.css';
import { Input, Container, Col, Row, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import LevelSetting from '../levelSetting/LevelSetting';

class PlayerSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: '',
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  addPlayer() {
    if (this.state.players.length > 2) {
      return (
        this.setState({ modal: true })
      );
    }
    this.setState({ players: [...this.state.players, this.state.currentPlayer], currentPlayer: '' });
  }

  deletePlayer(index) {
    let players = this.state.players;
    players.splice(index, 1);
    this.setState({ players: [...players] });
  }

  handleChange(event) {
    this.setState({ currentPlayer: event.target.value });
  }

  render() {
    return (
      <Container className="container-setting">
        <h3 className="setting-title">SET UP YOUR  GAME</h3>
        <Row>
          <Col>
            <Input className="input-setting" type="text" maxLength="12" placeholder="Player 1" onChange={(event) => this.handleChange(event)} />
            {this.state.players.map((player, index) => {
              return (
                <div key={index} className="key">
                  <Input className="input-setting" type="text" maxLength="12" placeholder={`Player ${index + 2}`} onChange={(event) => this.handleChange(event)} />
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="setting-buttons">
          <Button className="add-delete-button" onClick={() => this.deletePlayer(this.state.players.length - 1)}>-</Button>
          <Button className="add-delete-button" onClick={() => this.addPlayer()}>+</Button>
        </Row>

        <LevelSetting key={this.state.players.length} players={this.state.players}/>

        <div className="modal-container">
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Warning</ModalHeader>
            <div className="hr"></div>
            <ModalBody >
              4 players max
            </ModalBody>

          </Modal>
        </div>
      </Container>

    );
  }
}

export default PlayerSetting;