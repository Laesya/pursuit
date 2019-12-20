import React from 'react';
import { Button } from 'reactstrap';
import './ChooseCategoryButton.css';

export default function ChooseCategoryButton(props) {
  return (
    <Button 
      block
      className='ChooseCategoryButton'
      color={props.color}
      size='lg'
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
