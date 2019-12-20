import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

library.add(faCopyright);

const LogoWildPursuit = 'https://nsa40.casimages.com/img/2019/04/03/190403080403351823.png?fbclid=IwAR1i_zg1UktjC7InEdv3kJO68fEfB9dsX9pOf9t-7t2VJMYBztffiFDnga4';

function Footer(props) {
  return <div className="footer">
    <Container>
      <Row className="justify-content-center">
        
      </Row>
      <Row className="rowFooter">
        <Col className="colFooter">
          <ul className="mentions">
            <li className="liFooter"><a href="/about">About</a></li>
            <li className="liFooter"><a href="/legal-mentions">Legal mentions</a></li>
          </ul>
        </Col>
        <Col className="colFooter">
          <ul className="corporate">
            <li>{
              props.location.pathname !== '/' &&
              <img className="logoHomepage" src={LogoWildPursuit} alt="" />
            }</li>
            <li><span className="copyright"><FontAwesomeIcon icon={faCopyright} /></span>Wild Pursuit</li>
          </ul>
        </Col>
        <Col className="colFooter">
          <ul className="logoAppleAndroid">
            <li><a href="https://www.apple.com/fr/ios/app-store/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwqJgZj-4AVZVxxjv8AJe9wPBCcOZMPhJy3WoS2yy7kFqX_8LJw" alt="" /></a></li>
            <li><a href="https://play.google.com/store?hl=fr"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZLSSa9bd90huii_S_tlHu92vtJnFijQvbqfvsaGQUbBB5ObB5w" alt="" /></a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>;
}

export default withRouter(Footer);