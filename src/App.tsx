/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.css';
import Product from './components/product';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0);
  const [countpic, setCountpic] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [headerSections, setHeaderSections] = useState(['Products', 'About us', 'Your products']);
  const handleClick = (name: string) => {
    setCount(count + 1);
    console.log(count, name);
  };

  const itemClick = (picture: string) => {
    setCountpic(countpic + 1);
    console.log(countpic, picture);
  };

  const logoClick = () => {
    // eslint-disable-next-line no-alert
    const textForNewHeader = prompt('Введіть назву нової кнопки Header\'a');
    const validTextForNewHeader = textForNewHeader !== null ? textForNewHeader : '';
    if (headerSections.includes(validTextForNewHeader)) {
      setHeaderSections(headerSections.filter(item => item !== textForNewHeader));
    } else {
      setHeaderSections([...headerSections, validTextForNewHeader]);
    }
    console.log(headerSections.length, textForNewHeader);
  };

  const addToCartMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };

  const handleClickBoth = () => {
    addToCartMessage();
    handleClick;
  };

  return (
    <div className='App'>
      <Header
        headerText='Fruit shop'
        headerButtons={headerSections}
        logo='https://images.squarespace-cdn.com/content/v1/575a6067b654f9b902f452f4/1552683653140-0UUVQSSUEWVC73AWAEQG/300Logo.png?format=2500w'
        handleClick={handleClick}
        logoClick={logoClick}
      />
      <Product
        productText='apple'
        cardMainPicture='https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png'
        handleClick={handleClickBoth}
        itemClick={itemClick}
      />
      {showMessage && <div className='Added'>Added to cart</div>}

      <Footer
        footerButtons={['About us', 'Contacts', 'Footer3', 'Footer4']}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
