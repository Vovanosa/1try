import { FunctionComponent } from 'react';
import styles from './Loader.module.scss';

const Loader: FunctionComponent = () => (

  <div className={styles.loader_container}><div className={styles.loader} /></div>

);

export default Loader;
