import React, { useState } from 'react';
import dadosIniciais from './data/dados_iniciais.json'
import Menu from './components/menu';
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {


  return (
    <div>
      <Menu />
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={'React Navigation V'}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Footer />
    </div>
  );
}

export default App;