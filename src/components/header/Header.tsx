/* eslint-disable react/button-has-type */
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

interface HeaderProps {
  headerText: string
  headerButtons: string[][]
  logo: string
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  const {
    headerText, headerButtons, logo,
  } = props;

  return (
    <div className={styles.header}>
      <div className={styles.headertext}><h1><Link to='/'>{headerText}</Link></h1></div>
      {headerButtons.map((name) => (
        <Link to={name[1]}>
          <button
            className={styles.button}
          >
            {name[0]}
          </button>
        </Link>

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
