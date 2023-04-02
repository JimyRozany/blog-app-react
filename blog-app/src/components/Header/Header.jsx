import Styles from './Header.module.css';

const Header = () => {
  return (
    <header className={Styles.header}>
      <h2>Inc. This Morning</h2>
      <h1><span>“</span>Blog<span>” </span></h1>
      <p>awsome place to make oneself <br /> productive and entertined through dily updates.</p>
    </header>
  )
}

export default Header
