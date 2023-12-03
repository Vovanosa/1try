/* eslint-disable react/button-has-type */
import {
  FunctionComponent, HTMLProps, useEffect,
} from 'react';
import styles from './Footer.module.scss';

interface FooterProps extends HTMLProps<HTMLButtonElement> {
  footerButtons: string[]
}

const Footer: FunctionComponent<FooterProps> = (props) => {
  const { footerButtons } = props;

  useEffect(() => {

  });

  return (
    <div className={styles.footer}>
      {footerButtons.map((name) => (
        <button
          className={styles.button}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default Footer;
