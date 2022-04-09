import { Link, useNavigate } from 'react-router-dom'
import Input from '../../../input'
import Button from '../../../button'
import { useEffect, useState } from 'react'
import useFetch from '../../../../hooks/useFetch'
// import { AuthorizationContext } from '../../../../contexts/authorization'
import style from '../style.module.css'

function LogIn() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [failLogin, setFailLogin] = useState(false)
  const [authorization, setAuthorization] = useState(false)

  const { loading, request } = useFetch()

  // const context = useContext(AuthorizationContext)

  let navigate = useNavigate()

  const handleLogin = async e => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ email: user, senha: password })
    }

    const resp = await request('auth', options)

    if (resp.json.status === 401 || resp.json.status === 400) {
      setFailLogin(true)
    }

    if (resp.json.status === 200) {
      setFailLogin(false)
      setAuthorization(true)
    }
  }

  useEffect(() => {
    localStorage.getItem('token') && navigate('/contatos')
  }, [authorization])

  return (
    <form className={style.access_form}>
      <div className={style.access_inputs}>
        <Input
          value={user}
          className={style.access_user}
          placeholder="E-mail"
          type="text"
          required
          onChange={e => setUser(e.target.value)}
        />
        <Input
          value={password}
          className={style.access_password}
          placeholder="Senha"
          type="password"
          required
          onChange={e => setPassword(e.target.value)}
        />
        {failLogin && (
          <p className={style.fail_login}>Usuário ou senha inválido.</p>
        )}
      </div>
      <Link className={style.access_link} to="/signup">
        Criar uma conta.
      </Link>
      <Button type="button" className={style.access_btn} onClick={handleLogin}>
        Entrar
      </Button>
    </form>
  )
}

export default LogIn
