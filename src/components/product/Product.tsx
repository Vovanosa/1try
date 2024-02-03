import { FunctionComponent, useState } from 'react';
import styles from './Product.module.scss';
import Card from '../ui-kit/card';
import Button from '../ui-kit/button/Button';

interface ProductProps {
  productName: string
  productText: string
  cardMainPicture: string
  handleClick: (name: string) => void
}

const pics = ['https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png', 'https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png', 'https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png', 'https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png'];

const Product: FunctionComponent<ProductProps> = (props) => {
  const {
    productName, productText, cardMainPicture, handleClick,
  } = props;

  const [buttonName, setButtonName] = useState('Add to Cart');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addToCartMessage = () => {
    handleClick(productName);
    setButtonName('ADDED TO CART');
    setTimeout(() => {
      setButtonName('Add to Cart');
    }, 1000);
  };

  return (
    <p>
      <div className={styles.mainmenu}>
        <div className={styles.card}>
          <Card
            cardMainPicture={cardMainPicture}
            cardAlt={productText}
            cardAlbumPictures={pics}
          />

        </div>

        <div className={styles.text}>
          <div className={styles.header}>
            <h1>{productName}</h1>
            <span>COD: 1488</span>
          </div>
          <div className={styles.price}>
            R$
            {' '}
            <span>7.93</span>
          </div>
          <div className={styles.variant}>
            <h3>SELECT A COLOR</h3>
            <ul>
              <li>
                <img
                  src='https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png'
                  alt='green apple'
                />
              </li>
              <li>
                <img
                  src='https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png'
                  alt='yellow apple'
                />
              </li>
              <li>
                <img
                  src='https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png'
                  alt='orange apple'
                />
              </li>
              <li>
                <img
                  src='https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png'
                  alt='red apple'
                />
              </li>
            </ul>
          </div>
          <div className={styles.description}>
            <h3>BENEFITS</h3>
            <ul>
              <li>Apples are nutricious</li>
              <li>Apples may be good for weight loss</li>
              <li>Apples may be good for bone health</li>
              <li>They&apos;re linked to a lowest risk of diabetes</li>
            </ul>
          </div>
          <Button
            buttonText={buttonName}
            handleClick={addToCartMessage}
          />
        </div>

      </div>

    </p>
  );
};

export default Product;
