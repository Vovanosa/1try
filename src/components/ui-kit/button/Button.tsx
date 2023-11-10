import { FunctionComponent } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  buttonText: string
  handleClick: (name: string) => void
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { buttonText, handleClick } = props;

  return (
    <p>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        className={styles.button}
        onClick={() => { handleClick(buttonText); }}
      >
        {buttonText}
      </button>
    </p>
  );
};

export default Button;
