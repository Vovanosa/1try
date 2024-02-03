import React, { useEffect, useState } from 'react';
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import Product from './components/product';
import Header from './components/header';
import Footer from './components/footer';
import Loader from './components/ui-kit/loader';

function App() {
  const headerSections = [['Products', '/products'], ['About us', '/about_us'], ['Your products', '/your_products']];
  const footerSections = ['About us', 'Contacts', 'Footer3', 'Footer4'];
  const [cartItems, setCartItems] = useState(['']);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (productName: string) => {
    if (cartItems[0] === '') {
      setCartItems([productName]);
    } else if (!cartItems.includes(productName)) setCartItems([...cartItems, productName]);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    // eslint-disable-next-line no-console
    console.log(cartItems, [productName]);
  };
  const cartItemString: string | null = localStorage.getItem('cart');

  const productsData = [
    {
      productName: 'Delicious Apples',
      productText: 'apple',
      cardMainPicture: 'https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png',
      handleClick: () => { handleClick('Delicious Apples'); },
    },
    {
      productName: 'Delicious Bananas',
      productText: 'banana',
      cardMainPicture: 'https://gallery.yopriceville.com/downloadfullsize/send/3155',
      handleClick: () => { handleClick('Delicious Bananas'); },
    },
    {
      productName: 'Delicious Grapes',
      productText: 'grape',
      cardMainPicture: 'https://www.freepnglogos.com/uploads/grapes-png/mzr-red-grapes-36.png',
      handleClick: () => { handleClick('Delicious Grapes'); },
    },
    {
      productName: 'Delicious Oranges',
      productText: 'orange',
      cardMainPicture: 'https://pngfre.com/wp-content/uploads/orange-poster.png',
      handleClick: () => { handleClick('Delicious Oranges'); },
    },
    {
      productName: 'Delicious Peaches',
      productText: 'peach',
      cardMainPicture: 'https://static.vecteezy.com/system/resources/previews/022/825/541/original/peach-fruit-peach-on-transparent-background-png.png',
      handleClick: () => { handleClick('Delicious Peaches'); },
    },
  ];

  return (
    <Router>
      <div className='App'>

        <Header
          headerText='Fruit shop'
          headerButtons={headerSections}
          logo='https://images.squarespace-cdn.com/content/v1/575a6067b654f9b902f452f4/1552683653140-0UUVQSSUEWVC73AWAEQG/300Logo.png?format=2500w'
        />
        {isloading && <Loader />}
        {!isloading && (
        <div>
          <Switch>

            <Route
              exact
              path='/'
            >
              <div className='main_page'>
                <div className='welcome_text'>
                  Welcome to my &apos;Fruit shop&apos;, to start shopping click &quot;
                  <Link to='/products'>products</Link>
                  &quot;
                </div>

              </div>
            </Route>
            <Route
              exact
              path='/products'
            >
              <div className='products_list'>
                {productsData.map((product, index) => (

                  <Product
                  // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    productName={product.productName}
                    productText={product.productText}
                    cardMainPicture={product.cardMainPicture}
                    handleClick={product.handleClick}
                  />
                ))}
              </div>
            </Route>
            <Route path='/your_products'>
              <div className='your_products'>
                { cartItemString !== null ? JSON.parse(cartItemString) : null}
              </div>
            </Route>
            <Route path='/about_us'>
              <div className='about_us'>This is a web-page I use to practice</div>
            </Route>
          </Switch>
          {' '}

        </div>
        )}

        <Footer
          footerButtons={footerSections}
        />

      </div>
    </Router>
  );
}

export default App;
