import { Link } from 'react-router-dom'
import Header from './components/header'
import Button from './components/button'
import sampleImg from './components/images/sample.png'
import style from './styles/App.module.css'

function App() {
  return (
    <div>
      <Header>
        <div className={style.btn_wrapper}>
          <Link to="/login">
            <Button className={style.login_btn}>Entrar</Button>
          </Link>
          <Link to="/signup">
            <Button className={`${style.cta_btn} ${style.header_cta_button}`}>
              Crie uma conta
            </Button>
          </Link>
        </div>
      </Header>

      <main className={style.main}>
        <div className={style.calls_wrapper}>
          <p className={style.calls + ' ' + style.animationOne}>
            Adicione pessoas.
          </p>
          <p className={style.calls + ' ' + style.animationTwo}>Organize-se.</p>
          <p className={style.calls + ' ' + style.animationThree}>
            Facilite a sua vida.
          </p>
          <p className={style.info}>
            <strong>My Contacts Book</strong> é uma agenda que te ajuda a
            gerenciar de maneira fácil e ágil seus contatos!
          </p>
          <Link className={style.link_btn} to="/signup">
            <Button className={style.cta_btn}>Crie uma conta</Button>
          </Link>
        </div>
        <figure className={style.figure}>
          <img
            className={style.img}
            src={sampleImg}
            alt="My Contacts Book Sample"
          />
        </figure>
      </main>
    </div>
  )
}

export default App
