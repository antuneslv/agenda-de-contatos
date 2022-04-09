import style from './style.module.css'

function Header({ children }) {
  return (
    <header className={style.header}>
      <h1 className={style.title}>My Contacts Book</h1>
      {children}
    </header>
  )
}

export default Header
