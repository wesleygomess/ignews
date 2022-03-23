import styles from './styles.module.scss';
import { SinginBuntton } from '../SinginButton';

export function Header() {
  return(
    <header className={styles.headerContaianer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo" />

        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

         <SinginBuntton />
      </div>
    </header>
  )
}