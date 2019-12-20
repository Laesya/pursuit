import React, { Component } from 'react';
import ChooseCategoryButton from '../chooseCategoryButton/ChooseCategoryButton';
import { Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { getGame, updatelocalStorageUserCategory } from '../../utils/localStorage';
import Camembert from '../camembert/Camembert';
import './ChooseCategoryCard.css';
  
class AnswerCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: '',
      categoryValue: ''
    };  
  }

  setCategory(input){
    this.setState({category: input});
  }

  setCategoryValue(){
    if (this.state.category === 'Litterature') {
      this.setState({categoryValue: 574});
    } else if (this.state.category === 'Mythology') {
      this.setState({categoryValue: 680});
    } else if (this.state.category === 'Sports') {
      this.setState({categoryValue: 42});
    } else if (this.state.category === 'Sciences') {
      this.setState({categoryValue: 25});
    }
  }

  editLocalStorage(username){
    let currentGame = getGame();
    const updatedArray = updatelocalStorageUserCategory(username, this.state.categoryValue);
    currentGame.players = updatedArray;
    localStorage.setItem('game', JSON.stringify({...currentGame}));
    console.log('current game is = ' + currentGame);
  }

  getPlayerName(playerIndex){
    let parseGame = JSON.parse(localStorage['game']);
    let playersArray = [...parseGame.players];
    return playersArray[playerIndex].name;
  }

  redirect = () => {
    this.props.history.push('/answer');
  }

  onClickFunk = async (input) => {
    await this.setState({category: input});
    await this.setCategoryValue();
    await this.editLocalStorage(this.getPlayerName(0));
    await this.redirect();
  }

  render() {
    return (
      <Container className="white-card">    
        <Camembert currentPlayer={this.getPlayerName(0)}/> 
        <h2 className="category-title">CHOOSE YOUR CATEGORY</h2>        

        <ChooseCategoryButton 
          text="LITTERATURE" 
          color="danger" 
          onClick={
            () => this.onClickFunk('Litterature') 
          }/>

        <ChooseCategoryButton 
          text="MYTHOLOGY" 
          color="dark" 
          onClick={() => this.onClickFunk('Mythology') 
          }/>

        <ChooseCategoryButton 
          text="SCIENCES" 
          color="primary" 
          onClick={() => this.onClickFunk('Sciences') 
          }/>

        <ChooseCategoryButton 
          text="SPORTS" 
          color="warning" 
          onClick={() => this.onClickFunk('Sports') 
          }/>

      </Container>
    );
  }
}

export default withRouter(AnswerCard);