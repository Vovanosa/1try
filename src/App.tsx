import React, { useState } from 'react';
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './components/product';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const headerSections = ['Products', 'About us', 'Your products'];
  const footerSections = ['About us', 'Contacts', 'Footer3', 'Footer4'];
  const [cartItems, setCartItems] = useState(['']);
  const handleClick = (productName: string) => {
    if (cartItems[0] === '') {
      setCartItems([productName]);
    } else if (!cartItems.includes(productName)) setCartItems([...cartItems, productName]);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    // eslint-disable-next-line no-console
    console.log(cartItems, [productName]);
  };
  const cartItemString: string | null = localStorage.getItem('cart');

  return (
    <Router>
      <div className='App'>

        <Header
          headerText='Fruit shop'
          headerButtons={headerSections}
          logo='https://images.squarespace-cdn.com/content/v1/575a6067b654f9b902f452f4/1552683653140-0UUVQSSUEWVC73AWAEQG/300Logo.png?format=2500w'
        />
        <Switch>
          <Route
            exact
            path='/'
          >
            <div className='products_list'>
              <Product
                productName='Delicious Apples'
                productText='apple'
                cardMainPicture='https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png'
                handleClick={() => { handleClick('Delicious Apples'); }}
              />
              <Product
                productName='Delicious Bananas'
                productText='banana'
                cardMainPicture='https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png'
                handleClick={() => { handleClick('Delicious Bananas'); }}
              />
              <Product
                productName='Delicious Grapes'
                productText='grape'
                cardMainPicture='https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png'
                handleClick={() => { handleClick('Delicious Grapes'); }}
              />
              <Product
                productName='Delicious Oranges'
                productText='orange'
                cardMainPicture='https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png'
                handleClick={() => { handleClick('Delicious Oranges'); }}
              />
              <Product
                productName='Delicious Peaches'
                productText='peach'
                cardMainPicture='https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png'
                handleClick={() => { handleClick('Delicious Peaches'); }}
              />
            </div>
          </Route>
          <Route path='/cart'>
            <div className='cart'>
              { cartItemString !== null ? JSON.parse(cartItemString) : null}
            </div>
          </Route>
        </Switch>
        <Footer
          footerButtons={footerSections}
        />

      </div>
    </Router>
  );
}

export default App;
