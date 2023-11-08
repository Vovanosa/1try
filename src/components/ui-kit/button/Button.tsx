import { FunctionComponent, useState } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  buttonText: string
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { buttonText } = props;
  const [buttonTextreal, SetButtonTextreal] = useState(buttonText);
  const handleClick = () => {
    if (buttonTextreal === buttonText) SetButtonTextreal('New Text');
    else SetButtonTextreal(buttonText);
  };

  return (
    <p>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        className={styles.button}
        onClick={handleClick}
      >
        {buttonTextreal}
      </button>
    </p>
  );
};

export default Button;
