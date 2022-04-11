import { useContacts } from '../../../../contexts/contacts-data'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../../input'
import Button from '../../../button'
import { useEffect, useState } from 'react'
import useFetch from '../../../../hooks/useFetch'
import useStorage from '../../../../hooks/useStorage'
import style from '../style.module.css'

function LogIn() {
  const contactsContext = useContacts()
  const { getContacts } = contactsContext
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [failLogin, setFailLogin] = useState(false)
  const [authenticated, setAuthenticated] = useStorage('authenticated', false)
  const { request } = useFetch()
  const navigate = useNavigate()

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
      setAuthenticated(true)
      getContacts()
    }
  }

  useEffect(() => {
    getContacts()
    sessionStorage.getItem('token') && navigate('/contatos')
  }, [authenticated])

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
