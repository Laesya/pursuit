import React, { Component } from 'react';
import MyButton from '../myButton/MyButton';
import { Modal, ModalBody, Col, Row, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './GoodRep.css';

export default class GoodRep extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
    };
    this.quotes = this.quotes.bind(this);
  }
  quotes(){
    let quotes = ['GG EZ - YAN M.', ' 145deQI - Yann M.', 
      'Quelle belle intelligence !! - Yan M.', 
      'C’était facile, ça, non ?! - Yan M.', 
      "Mais c'est quoi un GigoWatt ?", 
      'Leeloo Dallas Moultipass - Yann M.', 
      "Quand je suis content, je vomis... et là j'suis hyper content... Yann M.", 
      'Good boy - Paul DOS SANTOS', 
      "'Félicitations jeune padawan ! ' - Paul DOS SANTOS", 
      "'Fais le ou ne le fais pas. Il n'y a pas d'essai.' - Yoda - Paul DOS SANTOS", 
      ' Je suis aveugle mais mes yeux sont lucides, vous êtes bon ! - Paul DOS SANTOS', 
      "'La force sera avec toi, toujours.' - Ben Kenobi - Paul DOS SANTOS",
      'T’es bon(ne) - Vivien POUGET', 
      'Le Dalaï Lama approuve votre réponse !- Rémy DUCRY', 
      'Bill Gates vous veut dans son équipe ! - Rémy DUCRY', 
      'You can take a break and take a $someFood ! of course if you aren"t in diet ! - Rémy DUCRY', 
      'Now Neo is watching you !- Rémy DUCRY', 
      "'On peux tromper mille fois une personne, non, attends...' - Yann M.", 
      "'Wake Up Neo, You're in the Matrix. Follow the White Rabbit.' - Yann M.", 
      'Well done ! Now look your phone a call from pentagon is coming ! - Rémy DUCRY', 
      'Well done ! You make the mother of dragon happy (and you aren"t john !!!) ! - Rémy DUCRY', 
      'Bien joué, nous sommes bientôt à court de défi... tu es trop fort ! - Rémy DUCRY', 
      'If you live another day I will be very impressed. - Rémy DUCRY', 
      "'It’s over 9000 !!!' - DBZ - Jay & Maxime GYPTEAU", 
      'Tu t’es servi de ton cerveau à 100% - Jay', 
      "We're going to have to wear sunglasses, your intelligence dazzles us!!!! Impressive! - Rémy DUCRY", 
      'A. Einstein approve it ! - Rémy DUCRY', 
      'Félicitation ! - Bastien', 
      'Tu serais pas en train de travailler à l"élaboration d"un algorithme destiné à photographier un trou noir ? - Yann M.',
      'Sheldon Cooper tells us he gave the same answer and you"re plagiarizing it! - Rémy DUCRY', 
      'Thuglife! - Thierry Stollsteiner', 
      "That's my spot - Yann M.",
      'Bien joué Aladin - homas Coumes', 
      'Même nous on savais pas - Thomas Coumes', 
      'while the others have swimming pools, you excel! Congratulations! - Rémy DUCRY', 
      "'It's winter, it's very cold but your good answers warm our hearts!'- Rémy DUCRY", 
      "You're the best ! - Walid", 
      "'Well done! Well done! Winter is coming but stay focused on your path, you will avoid serving dragons meals!' - Rémy DUCRY", 
      "'I can't believe that you're this smart and did what you did to your companion cube' - Yann M.", 
      "it's just part of the experience - Yann M.", 
      'Brilliant! Do you share genes with S. Hawking? - Rémy DUCRY', 
      'Bravo ! Apéro ! - Rémy DUCRY', 
      "'BOOM! HEADSHOT!'- FPS Doug - Yann M.", 
      'Well done! Well done! You already knew the answer, it shows! - Rémy DUCRY', 
      'Ca ne peux pas être *que* de la chance... - Yann M.', 
      'Your answer is as effective as a good headshot! GG - Rémy DUCRY', 
      "'That's a terrifying achievement, wouldn't you give me the numbers of the LOTO?' - Rémy DUCRY", 
      "'WARNING ! We're going to include a captcha, are you a robot? How can a human be so brilliant?!' - Rémy DUCRY", 
      'Deepmind is watching you ! You make an excellent teacher! - Rémy DUCRY', 
      "' Avoues, c'est toi qui a battu Deeper Blue' - Yann M.", 
      "'You did it! C'est gagné!' - Julie T", 
      ' Les doigts dans le nez ! - Julien Rousseau', 
      'Bon, et si on augmentait un peu la difficulté ?! - Yann M.', 
      'You rock ! - Gaëtan Hardy', 
      ' Tu défonce Alphonse ! - Gaëtan Hardy', 
      'Tu peux faire semblant de réflechir au moins la prochaine fois ? - Yann M.', 
      'Tu comptes gagner comme ça tout le temps ?! - Yann M.', 
      'Je plussoie totalement ta réponse - Florian Hourlier', 
      'Mais dis-moi, tu arriverais presque à la cheville de Chuck Norris ! - Flo'];
    return quotes[Math.floor(Math.random()*quotes.length)];
  }
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalBody className='modalGoodStyle'>
          <Row>
            <Col>
              <FontAwesomeIcon icon={['fas','check']} className='checkGood'/>
            </Col>
          </Row>
          <Row>
            <Col>
              {this.quotes()}  
            </Col>
          </Row>
          <Row>
            <Col>
              <p>+5</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <MyButton className='Btn-answer' text='Next Question' url='/choose-category' />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    );
  }
}