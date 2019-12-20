import React from 'react';
import Logo from '../logo/Logo';
import MyButton from '../myButton/MyButton';
import './HomePage.css';

let myTriangle = <span className="triangle" key='Toraifōsu'></span>;

export default function HomePage() {
  return (
    <React.Fragment>
      <div className='mainBody'>
        <Logo />
        <h1 className='mainTitle'>Wild Pursuit</h1>
        <h2 className='subTitle'>The Wild Pursuit is better than the Trivial Pursuit</h2>
        <MyButton text={['Let\'s play ', myTriangle]} url='/create-game' class="myButton" />
      </div>
    </React.Fragment>
  );
}
