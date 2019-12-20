import React, { Component } from 'react';
import './LevelSetting.css';
import { generateId } from '../../utils/localStorage';

import {  Container,Col, Row, Button } from 'reactstrap';
import MyFunkyButton from '../myFunkyButton/MyFunkyButton';
import { withRouter } from 'react-router-dom';

class LevelSetting extends Component {
  constructor(props){
    super(props);
    this.state={
      gameDifficulty:0,
      numberOfPlayers: 0,
      playersAsObjectsInAnArray: [{}],
      players: ['Player1', 'Nyan Cat'],
      isCategoryChosen: false
    };
  }

  componentDidMount() {
    this.setState({players: this.props.players, numberOfPlayers: this.props.players.length});
  }
  
  setDifficulty(x){
    this.setState({gameDifficulty:x, isCategoryChosen: true});
  }

  objectifyHumanBeings(){
    let baseArr = [...this.state.players];
    let objectifiedHumanBeingArr = [];
    for (let i = 0; i < baseArr.length; i++) {
      objectifiedHumanBeingArr.push(
        {name: baseArr[i],
          isActive: false,
          score: 0, 
          category: 0,
          hasPinkCamembert: false,
          hasBlueCamembert: false,
          hasYellowCamembert: false,
          hasPurpleCamembert: false,
          playerCamembertSum: 0
        });
    }
    this.setState({playersAsObjectsInAnArray: objectifiedHumanBeingArr});
  }

  howManyPlayers(){
    return this.state.players.length;
  }

  createGame() {
    let myId = generateId();
    localStorage.setItem('game', JSON.stringify(
      {
        id: myId,
        difficulty: this.state.gameDifficulty,
        numberOfPlayers: this.howManyPlayers(),
        players: this.state.playersAsObjectsInAnArray
      }
    ));
  }

  redirect = () => {
    this.props.history.push('/choose-category');
  }

  onClickFunk = async () => {
    if (this.state.numberOfPlayers === 0) {
      alert('One player minimum.');
    } else if (this.state.isCategoryChosen === false){
      alert('Please set difficulty AFTER setting players.');
    } else {
      await this.objectifyHumanBeings();
      await this.createGame();
      await this.redirect();
    }
  }

  render() {
    return (
      <div className="container-levelSetting">
                
        <h3 className="level-title">Choose your level</h3>
        <Container className = "container-button">
          <Row className="row-button">

            <Col className="col-button">
              <Button 
                outline color="secondary" 
                size="lg" 
                className="level-button"
                onClick = {() => this.setDifficulty(100)}
              >SILVER
              </Button>
            </Col>

            <Col className="col-button">
              <Button 
                outline color="warning" 
                size="lg" 
                className="level-button"
                onClick = {() => this.setDifficulty(300)}
              >GOLD
              </Button>
            </Col>

            <Col className="col-button">
              <Button 
                outline color="danger" 
                size="lg" 
                className="level-button"
                onClick = {() => this.setDifficulty(500)}
              >MASTER
              </Button>
            </Col>
            
          </Row>
          <Col className="col-button">
            <MyFunkyButton text='Go' onClick={() => this.onClickFunk(this.props)}/>
          </Col>
        </Container>
      </div>
    );
  }
}

export default withRouter(LevelSetting);