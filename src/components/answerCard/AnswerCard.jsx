import React, { Component } from 'react';
import { getGame, updatelocalStorageUserScore } from '../../utils/localStorage';
import Timer from '../timer/Timer';
import { Container, FormGroup, Input, Button } from 'reactstrap';
import GoodRep from '../goodRep/GoodRep';
import BadRep from '../badRep/BadRep';
import Camembert from '../camembert/Camembert';
import './AnswerCard.css';
 
const ApiUrl = 'http://jservice.io/api/clues';
 
export default class AnswerCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataApi : [{question: 'Please wait.'}],
      answerUser: '',
      randomQuestion: {category:{title:'Please wait again.'}},
      modal: false
    };  
    this.toggle = this.toggle.bind(this);
  }

  callDifficulty = JSON.parse(localStorage.getItem('game'));

  componentDidMount = async () => {
    await fetch(`${ApiUrl}?category=${this.props.category}&value=${this.callDifficulty.difficulty}`)
      .then((response) => response.json())
      .then((data) => {
        const randomQuestion = data[Math.floor(Math.random() * data.length)];
        this.setState({dataApi: data, randomQuestion});
      })
      .catch((error) => console.log(error));
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  editLocalStorage(username){
    let currentGame = getGame();
    const updatedArray = updatelocalStorageUserScore(username, this.state.categoryValue);
    currentGame.players = updatedArray;
    localStorage.setItem('game', JSON.stringify({...currentGame}));
  }

  render() {
    return (
      <div>
        {console.log(this.state.randomQuestion.answer)}
        <Container className="container-answer">  
          <Camembert />  
          <h2 className="titleAnswer">{this.props.player}</h2>
          <p>
            {this.state.randomQuestion.question}
          </p>
          <p>Question Level: {this.state.randomQuestion.value}</p>
          <p>Question Category: {this.state.randomQuestion.category.title}</p>

          <FormGroup>
            <Input className="input-style" type="text" name="answerUser" id="answerUser" onChange={this.onChange.bind(this)} value={this.state.answerUser} />
            <Timer />
          </FormGroup>
          <Button className="Btn-answer" text="Ok" onClick={this.toggle}>Ok</Button>
        </Container>
        {
          this.state.answerUser === this.state.randomQuestion.answer ?
            <GoodRep toggle={this.toggle} isOpen={this.state.modal} />     :
            <BadRep toggle={this.toggle} isOpen={this.state.modal} goodAnswer={this.state.randomQuestion.answer}/>
        }

      </div>
    );
  }
}