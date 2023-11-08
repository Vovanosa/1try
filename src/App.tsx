import React from 'react';
import './App.css';
import Product from './components/product';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <Header
        headerText='Fruit shop'
        headerButtons={['Products', 'About us', 'Your products']}
        logo='https://images.squarespace-cdn.com/content/v1/575a6067b654f9b902f452f4/1552683653140-0UUVQSSUEWVC73AWAEQG/300Logo.png?format=2500w'
      />
      <Product productText='apple' />
      <Footer footerButtons={['About us', 'Contacts', 'Footer3', 'Footer4']} />
    </div>
  );
}

export default App;
