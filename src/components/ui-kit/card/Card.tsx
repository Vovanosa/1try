import { FunctionComponent, useState } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  cardMainPicture: string
  cardAlt: string
  cardAlbumPictures: string[]
}

const Card: FunctionComponent<CardProps> = (props) => {
  const { cardMainPicture, cardAlt, cardAlbumPictures } = props;
  const [mainpic, setMainpic] = useState(cardMainPicture);
  const handleClick = (index: number) => {
    setMainpic(cardAlbumPictures[index]);
  };

  return (
    <div className={styles.card}>
      <div className={styles.controls}>
        <i className={styles.i}>share</i>
        <i className={styles.i}>favourite_border</i>
      </div>
      <img
        className={styles.picture}
        src={mainpic}
        alt={cardAlt}
      />
      <div className={styles.album}>
        <ul>
          {cardAlbumPictures.map((picture, index) => (
            <li>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
              <img
                key={picture}
                src={picture}
                alt={index.toString()}
                onClick={() => handleClick(index)}
              />
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default Card;
