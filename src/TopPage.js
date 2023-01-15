import React from 'react'
import Top from './components/HomePage/Top/Top';
import Adds from './components/HomePage/ads/Adds';
import Nav from './components/HomePage/Nav/Nav';
import Menu from './components/HomePage/menu/Menu';

const TopPage = () => {
  return (
    <div>
          <Top />
          <Adds />
          <Nav />
          <Menu />
    </div>
  )
}

export default TopPage
