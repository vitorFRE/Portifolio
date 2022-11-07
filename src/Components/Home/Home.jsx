import React from 'react';
import HomeProjetos from './HomeProjetos';
import Introducao from './Introducao';
import Sobre from './Sobre';
import Head from '../Helper/Head';

const Home = () => {
  return (
    <div>
      <Head title="Home" />
      <Introducao />
      <Sobre />
      <HomeProjetos />
    </div>
  );
};

export default Home;
