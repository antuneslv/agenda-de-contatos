import { Link } from 'react-router-dom'
import Input from '../../../input'
import Button from '../../../button'
import { useState, useRef } from 'react'
import useFetch from '../../../../hooks/useFetch'
import style from '../style.module.css'

function SignUp() {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [passwordIcon, setPasswordIcon] = useState(true)

  const inputPasswordRef = useRef(null)

  function showPassword(e) {
    inputPasswordRef.current.type === 'password'
      ? (inputPasswordRef.current.type = 'text')
      : (inputPasswordRef.current.type = 'password')

    passwordIcon === true ? setPasswordIcon(false) : setPasswordIcon(true)
  }

  const { loading, request } = useFetch()

  const handleSignUp = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: userEmail,
        senha: userPassword,
        nome: userName
      })
    }

    const resp = await request('user', options)
  }

  return (
    <form action="/login" className={style.access_form}>
      <div className={style.access_inputs}>
        <Input
          value={userName}
          className={style.access_user}
          placeholder="Nome de usuário"
          type="text"
          required
          onChange={e => setUserName(e.target.value)}
        />
        <Input
          value={userEmail}
          className={style.access_user}
          placeholder="E-mail"
          type="email"
          required
          onChange={e => setUserEmail(e.target.value)}
        />
        <div className={style.password_group}>
          <Input
            ref={inputPasswordRef}
            value={userPassword}
            className={style.access_password}
            placeholder="Senha"
            type="password"
            required
            onChange={e => setUserPassword(e.target.value)}
          />
          <svg
            className={passwordIcon ? style.isNotHidden : style.isHidden}
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            onClick={showPassword}
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
          <svg
            className={passwordIcon ? style.isHidden : style.isNotHidden}
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            onClick={showPassword}
          >
            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
          </svg>
        </div>
      </div>
      <Link className={style.access_link} to="/">
        Voltar.
      </Link>
      <Button className={style.access_btn} onClick={handleSignUp}>
        Cadastrar
      </Button>
    </form>
  )
}

export default SignUp
