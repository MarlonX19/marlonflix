import React from 'react';
import logo from '../../assets/logo.png'

import Button from '../../components/button';

// import ButtonLink from '../../components/buttonlink'

import './styles.css';

function Menu() {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={logo} alt='imagem logo' />
      </a>
      <Button className='ButtonLink' href='/'>
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;