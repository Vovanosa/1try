/* eslint-disable react/button-has-type */
import {
  FunctionComponent, HTMLProps, useEffect,
} from 'react';
import styles from './Footer.module.scss';

interface FooterProps extends HTMLProps<HTMLButtonElement> {
  footerButtons: string[]
  handleClick: (name: string) => void
}

const Footer: FunctionComponent<FooterProps> = (props) => {
  const { footerButtons, handleClick } = props;

  useEffect(() => {

  });

  return (
    <div className={styles.footer}>
      {footerButtons.map((name) => (
        <button
          className={styles.button}
          onClick={() => { handleClick(name); }}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default Footer;
