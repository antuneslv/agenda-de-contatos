import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../../button'
import Header from '../../header'
import useFetch from '../../../hooks/useFetch'
import style from './style.module.css'

function DetailsContact() {
  const params = useParams()
  const { loading, request } = useFetch()
  const [contact, setContact] = useState()

  const contactDetails = async () => {
    const resp = await request(`contact/${params.id}`)
    setContact(resp.json.data || [])
  }

  useEffect(() => {
    contactDetails()
  }, [])

  return (
    <>
      <Header>
        <Link to="/contatos">
          <Button className={style.back_btn}>Voltar</Button>
        </Link>
      </Header>
      <main className={style.contact_details_main}>
        <h2 className={style.contact_details_name}>{contact?.nome}</h2>
        <div className={style.contact_details_data}>
          <p>
            <span className={style.contact_details_span}>Apelido: </span>
            {contact?.apelido ? (
              contact.apelido
            ) : (
              <span className={style.empty_data}>Não Informado.</span>
            )}
          </p>
          <p>
            <span className={style.contact_details_span}>E-mail: </span>
            {contact?.email ? (
              contact.email
            ) : (
              <span className={style.empty_data}>Não Informado.</span>
            )}
          </p>
          <div>
            <p>
              <span className={style.contact_details_span}>Telefones: </span>
            </p>
            <p className={style.contact_details_text}>
              <span className={style.contact_details_span}>Celuar: </span>
              {contact?.telefones[2].numero ? (
                contact.telefones[2].numero
              ) : (
                <span className={style.empty_data}>Não Informado.</span>
              )}
            </p>
            <p className={style.contact_details_text}>
              <span className={style.contact_details_span}>Casa: </span>
              {contact?.telefones[0].numero ? (
                contact.telefones[0].numero
              ) : (
                <span className={style.empty_data}>Não Informado.</span>
              )}
            </p>
            <p className={style.contact_details_text}>
              <span className={style.contact_details_span}>Trabalho: </span>
              {contact?.telefones[1].numero ? (
                contact.telefones[1].numero
              ) : (
                <span className={style.empty_data}>Não Informado.</span>
              )}
            </p>
          </div>
          <div>
            <p>
              <span className={style.contact_details_span}>Endereço: </span>
            </p>
            <p className={style.contact_details_text}>
              <span className={style.contact_details_span}>Logradouro: </span>
              {contact?.endereco.logradouro ? (
                contact.endereco.logradouro
              ) : (
                <span className={style.empty_data}>Não Informado.</span>
              )}
            </p>
            <p className={style.contact_details_text}>
              <span className={style.contact_details_span}>Cep: </span>
              {contact?.endereco.cep ? (
                contact.endereco.cep
              ) : (
                <span className={style.empty_data}>Não Informado.</span>
              )}
            </p>
            <p className={style.contact_details_text}>
              <span className={style.contact_details_span}>Cidade: </span>
              {contact?.endereco.cidade ? (
                contact.endereco.cidade
              ) : (
                <span className={style.empty_data}>Não Informado.</span>
              )}
            </p>
            <p className={style.contact_details_text}>
              <span className={style.contact_details_span}>Estado: </span>
              {contact?.endereco.estado ? (
                contact.endereco.estado
              ) : (
                <span className={style.empty_data}>Não Informado.</span>
              )}
            </p>
            <p className={style.contact_details_text}>
              <span className={style.contact_details_span}>País: </span>
              {contact?.endereco.pais ? (
                contact.endereco.pais
              ) : (
                <span className={style.empty_data}>Não Informado.</span>
              )}
            </p>
          </div>
          <p>
            <span className={style.contact_details_span}>
              Nota do Contato:{' '}
            </span>
            {contact?.notas ? (
              contact.notas
            ) : (
              <span className={style.empty_data}>Não Informado.</span>
            )}
          </p>
        </div>
        <Link to={`/contato/editar/${params.id}`}>
          <Button>Editar</Button>
        </Link>
      </main>
    </>
  )
}

export default DetailsContact