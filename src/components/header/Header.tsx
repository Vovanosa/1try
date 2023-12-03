/* eslint-disable react/button-has-type */
import { FunctionComponent } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  headerText: string
  headerButtons: string[]
  logo: string
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  const {
    headerText, headerButtons, logo,
  } = props;

  return (
    <div className={styles.header}>
      <h1>{headerText}</h1>
      {headerButtons.map((name) => (
        <button
          className={styles.button}
        >
          {name}
        </button>

      ))}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img
        src={logo}
        alt='Logo of company'
        className={styles.logo}
      />
    </div>

  );
};

export default Header;
