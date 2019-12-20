import React from 'react';
import { Button } from 'reactstrap';
import './MyFunkyButton.css';

const MyFunkyButton = (props) => {
  return (
    <Button 
      className='my-funky-button'
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
;

export default MyFunkyButton;