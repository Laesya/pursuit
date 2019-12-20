import React from 'react';
import './Logo.css';
import { Container } from 'reactstrap';

const LogoWildPursuit = 'https://nsa40.casimages.com/img/2019/04/03/190403080403351823.png?fbclid=IwAR1i_zg1UktjC7InEdv3kJO68fEfB9dsX9pOf9t-7t2VJMYBztffiFDnga4';

function Logo() {
  return  <Container>
    <img className="logoWildPursuit" src={LogoWildPursuit} alt="" />
  </Container>;
}

export default Logo;