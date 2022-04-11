import { Link } from 'react-router-dom'
import Button from '../../button'
import Header from '../../header'
import Input from '../../input'
import style from './style.module.css'
import { useEffect, useState } from 'react'
import useFetch from '../../../hooks/useFetch'

function Contacts() {
  const [contacts, setContacts] = useState([])
  const { request } = useFetch()
  const [filteredName, setFilteredName] = useState([])

  const getContacts = async () => {
    const resp = await request('contact')
    setContacts(resp.json.data || [])
  }

  useEffect(() => {
    getContacts()
  }, [])

  useEffect(() => {
    setFilteredName(contacts)
  }, [contacts])

  function handleSearch(e) {
    const searchWord = e.target.value
    const filter = contacts.filter(contact => {
      return contact.nome.toLowerCase().includes(searchWord.toLowerCase())
    })
    setFilteredName(filter)
  }

  function logOut() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('authenticated')
  }

  return (
    <>
      <Header>
        <div className={style.btn_wrapper}>
          <Link to="/">
            <Button className={style.logout_btn} onClick={logOut}>
              Sair
            </Button>
          </Link>
        </div>
      </Header>
      <div className={style.contacts_wrapper}>
        <div className={style.search_input_wrapper}>
          <Input
            className={style.search_input}
            placeholder="Pesquisar... &#128269;"
            onChange={handleSearch}
          ></Input>
        </div>
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style.table_header}>
                Contatos
                <Link to="/novo-contato">
                  <Button className={style.add_btn}>+</Button>
                </Link>
              </th>
            </tr>
          </thead>
          <tbody className={style.table_body}>
            {contacts.length > 0 ? (
              filteredName.map(contact => (
                <tr key={contact.id}>
                  <td className={style.table_data}>
                    <Link to={`/contato/${contact.id}`}>
                      <div id={contact.id} className={style.table_content}>
                        <span>{contact.nome}</span>
                        <span className={style.td_phone}>
                          {' ' + contact.telefones[2].numero}
                        </span>
                      </div>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className={style.table_data_default}>
                  Insira o primeiro contato
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Contacts
