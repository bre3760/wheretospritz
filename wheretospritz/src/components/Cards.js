import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import proseccoImage from '../images/prosecco.png'
import aperolImage from '../images/aperol2.png'
import cupsImage from '../images/cups.png'
import chipsImage from '../images/chips2.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>What to bring!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              // src='./images/prosecco.png'
              src={proseccoImage}
              text='Mighty Prosecco of course'
              label='Prosecco'
            //   path='/services'
            />
            <CardItem
              // src='./images/aperol2.png'
              src={aperolImage}

              text='The Prosecco Companion'
              label='Aperol'
            //   path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              // src='./images/cups.png'
              src={cupsImage}

              text='Remeber to bring these!'
              label='Cups'
            //   path='/services'
            />
            <CardItem
              // src='./images/chips2.jpg'
              src={chipsImage}

              text='Food of any kind'
              label='Food'
            //   path='/products'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;