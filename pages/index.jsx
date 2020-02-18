import React, { FC } from 'react';
import Head from 'next/head';
import { Button, Carousel } from '../components/index';

export const attorneysCarousel = {
  "headerDescription": "Meet Our Experts",
  "header": "Qualified Attorneys",
  "data": [
    {
      "lineOne": 'Elan Mendelsohn',
      "lineTwo": 'Family Law',
      "linkedIn": 'https://ca.linkedin.com/in/elan-mendelsohn-6a4b38195',
    },
    {
      "lineOne": 'Sean Turk',
      "lineTwo": 'Property Law',
      "linkedIn": 'https://ca.linkedin.com/in/elan-mendelsohn-6a4b38195'
    },
    {
      "lineOne": 'Evan Kubes',
      "lineTwo": 'Corporate Espionage',
      "linkedIn": 'https://ca.linkedin.com/in/elan-mendelsohn-6a4b38195'
    },
  ]
};

const Home = () => {
  return (
    <div>
      <Head>
        <title>Playground</title>
      </Head>

      <h1>hey dude!</h1>
      <Button
        onClick={() => console.log('clicked')}
        id="button-id"
      >
        hey dude!
    </Button>
      <Carousel
        heading={attorneysCarousel.headerDescription}
        headingDescription={attorneysCarousel.headerDescription}
        data={attorneysCarousel.data}
      />


    </div>


  );
};

export default Home;
