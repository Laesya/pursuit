import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import CreateGamePage from '../createGamePage/CreateGamePage';
import ChooseCategoryPage from '../chooseCategoryPage/ChooseCategoryPage';
import AnswerPage from '../answerPage/AnswerPage';
import CongratulationsPage from '../congratulationsPage/CongratulationsPage';
import AboutUsPage from '../aboutUsPage/AboutUsPage';
import LegalMentionsPage from '../legalMentionsPage/LegalMentionsPage';

export default function Router() {
  return (
    <Switch>
      <Route path='/create-game' component={CreateGamePage} />
      <Route path='/choose-category' component={ChooseCategoryPage} />
      <Route path='/answer' component={AnswerPage} />
      <Route path='/congratulations' component={CongratulationsPage} />
      <Route path='/about' component={AboutUsPage} />
      <Route path='/legal-mentions' component={LegalMentionsPage} />
      <Route path='/' component={HomePage} />
    </Switch>
  );
}
