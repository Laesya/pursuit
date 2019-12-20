import React from 'react';
import MyButton from '../myButton/MyButton';
import './AboutUsPage.css';

export default function AboutUsPage() {
  return (
    <div className='mainBody'>
      <p>
        This is my About page.
      </p>
      <MyButton text="Back to Index" url='/' />
    </div>
  );
}
