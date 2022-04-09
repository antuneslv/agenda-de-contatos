import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../../button'
import Header from '../../header'
import Form from '../../form'
import useFetch from '../../../hooks/useFetch'
import style from './style.module.css'

function EditContact() {
  const params = useParams()
  const [contact, setContact] = useState(null)
  
  const contactDetails = async () => {
    const resp = await request(`contact/${params.id}`)
    setContact(resp.json.data || {})
  }

  useEffect(() => {
    contactDetails()
  }, [])

  useEffect(() => {
    setName(contact?.name || '')
    console.log(contact?.nome)
  }, [contact])


 
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

    const { loading, request } = useFetch()
    let navigate = useNavigate()

    const handleEditContact = async event => {
      event.preventDefault()

      const options = {
        method: 'PATCH',
        body: JSON.stringify({
          idContato: params.id,
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

      const resp = await request('contact', options)

      navigate(`/contato/${params.id}`)
    }

    return (
      <>
        <Header>
          <Link to="/contatos">
            <Button className={style.back_btn}>Voltar</Button>
          </Link>
        </Header>
        {name}
        <Form
          legend={'Edite o contato'}
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
          saveContact={handleEditContact}
        />
      </>
    )
  
}

export default EditContact
