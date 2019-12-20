import React from 'react';
import MyButton from '../myButton/MyButton';
import './LegalMentionsPage.css';

export default function LegalMentions() {
  return (
    <div className='mainBody'>
      <p>
      These are my legal mentions.
      </p>
      <MyButton text="Back to Index" url='/' />
    </div>
  );
}
