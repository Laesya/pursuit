import React from 'react';
import AnswerCard from '../answerCard/AnswerCard';
import './AnswerPage.css';

let getPlayerName = (playerIndex) => {
  let parseGame = JSON.parse(localStorage['game']);
  let playersArray = [...parseGame.players];
  return playersArray[playerIndex].name;
};

let getCategory = (playerIndex) => {
  let parseGame = JSON.parse(localStorage['game']);
  let playersArray = [...parseGame.players];
  return playersArray[playerIndex].category;

};

export default function AnswerPage() {
  return (
    <div className='mainBody'>
      <AnswerCard player={getPlayerName(0)} category={getCategory(0)}/>  
    </div>
  );
}
