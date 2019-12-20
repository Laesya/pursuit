import React from 'react';
import MyButton from '../myButton/MyButton';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CongratulationsPage.scss';

let getPlayerName = (playerIndex) => {
  let parseGame = JSON.parse(localStorage['game']);
  let playersArray = [...parseGame.players];
  return playersArray[playerIndex].name;
};

export default function CongratulationsPage() {
  return (
    <div className='mainBody congratStyle'>
      <Container  className='congratStyle'>
      <img src='https://nsa40.casimages.com/img/2019/04/26/190426114655934746.png' className='LogoTest' alt='trophee' />
      <div className="announcement">And the winner is...</div> 
      <div className="confetti">
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        
      </div>
        <div className='congratAnime'>
          <div id='nameWinner'> 
            <span className="reveal-text">{getPlayerName(0)}</span>
          </div> 
        </div>    
        <MyButton className='btnCongrats' text="Back to home" url='/' /> 
      </Container>
    </div>
  );
}
