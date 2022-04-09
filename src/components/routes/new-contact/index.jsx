import { Link, useNavigate } from 'react-router-dom'
import Header from '../../header'
import Button from '../../button'
import Form from '../../form'
import { useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import style from './style.module.css'

function NewContact() {
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [celPhone, setCelPhone] = useState('')
  const [homePhone, setHomePhone] = useState('')
  const [workPhone, setWorkPhone] = useState('')
  const [email, setEmail] = useState('')
  const [adress, setAdress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [notes, setNote] = useState('')

  const { request } = useFetch()
  let navigate = useNavigate()

  const handleNewContact = async e => {
    e.preventDefault()

    const options = {
      method: 'POST',
      body: JSON.stringify({
        nome: name,
        apelido: nickname,
        telefones: [
          {
            tipo: 'casa',
            numero: homePhone
          },
          {
            tipo: 'trabalho',
            numero: workPhone
          },
          {
            tipo: 'celular',
            numero: celPhone
          }
        ],
        email,
        endereco: {
          logradouro: adress,
          cidade: city,
          estado: state,
          cep: zipCode,
          pais: country
        },
        notas: notes
      })
    }

    await request('contact', options)

    navigate('/contatos')
  }

  return (
    <>
      <Header>
        <Link to="/contatos">
          <Button className={style.cancel_btn}>Cancelar</Button>
        </Link>
      </Header>
      <Form
        legend={'Cadastre o novo contato'}
        name={name}
        changeName={e => setName(e.target.value)}
        nickname={nickname}
        changeNickname={e => setNickname(e.target.value)}
        celPhone={celPhone}
        changeCelPhone={e => setCelPhone(e.target.value)}
        homePhone={homePhone}
        changeHomePhone={e => setHomePhone(e.target.value)}
        workPhone={workPhone}
        changeWorkPhone={e => setWorkPhone(e.target.value)}
        email={email}
        changeEmail={e => setEmail(e.target.value)}
        adress={adress}
        changeAdress={e => setAdress(e.target.value)}
        zipCode={zipCode}
        changeZipCode={e => setZipCode(e.target.value)}
        city={city}
        changeCity={e => setCity(e.target.value)}
        state={state}
        changeState={e => setState(e.target.value)}
        country={country}
        changeCountry={e => setCountry(e.target.value)}
        notes={notes}
        changeNotes={e => setNote(e.target.value)}
        saveContact={handleNewContact}
      />
    </>
  )
}

export default NewContact
