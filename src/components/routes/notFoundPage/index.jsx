import { Link } from 'react-router-dom'
import style from './style.module.css'

function NotFoundPage() {
  return (
    <main className={style.not_found_main}>
      <h2 className={style.not_found_title}>404</h2>
      <h2 className={style.not_found_title}>Página não encontrada.</h2>
      <p className={style.not_found_text}>
        A página que você está procurando não existe ou ocorreu um erro.
      </p>
      <p className={style.not_found_text}>
        Tente mais tarde ou <Link to="/">volte para a página principal</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
