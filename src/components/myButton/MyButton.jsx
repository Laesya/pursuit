import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import './MyButton.css';

const myButton = withRouter(( props ) => (
  <Button className={`myButton ${props.className}`}
    onClick={
      () => { props.history.push(props.url);}
    }
  >
    {props.text}
  </Button>
)
);

export default myButton;

