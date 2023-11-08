/* eslint-disable react/button-has-type */
import {
  FunctionComponent, HTMLProps, useEffect, useState,
} from 'react';
import styles from './Footer.module.scss';

interface FooterProps extends HTMLProps<HTMLButtonElement> {
  footerButtons: string[]
}

const Footer: FunctionComponent<FooterProps> = (props) => {
  const { footerButtons } = props;
  const [log, setLog] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(log);
  });

  const handleClick = (index: number) => {
    setLog(footerButtons[index]);
  };

  return (
    <div className={styles.footer}>
      {footerButtons.map((name, index) => (
        <button
          className={styles.button}
          onClick={() => { handleClick(index); }}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default Footer;
