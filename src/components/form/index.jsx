import Input from '../input'
import Button from '../button'
import style from './style.module.css'

function Form({
  legend,
  name,
  changeName,
  nickname,
  changeNickname,
  celPhone,
  changeCelPhone,
  homePhone,
  changeHomePhone,
  workPhone,
  changeWorkPhone,
  email,
  changeEmail,
  adress,
  changeAdress,
  zipCode,
  changeZipCode,
  city,
  changeCity,
  state,
  changeState,
  country,
  changeCountry,
  notes,
  changeNotes,
  saveContact
}) {
  return (
    <form className={style.new_contact_form}>
      <fieldset className={style.new_contact_fieldset}>
        <legend className={style.new_contact_legend}>{legend}</legend>
        <div className={style.input_group}>
          <div className={style.input_wrapper}>
            <label htmlFor="name">Nome:</label>
            <Input
              value={name}
              onChange={changeName}
              id="name"
              placeholder="Nome"
              className={style.new_contact_input}
            ></Input>
          </div>
          <div className={style.input_wrapper}>
            <label htmlFor="nickname">Apelido:</label>
            <Input
              value={nickname}
              onChange={changeNickname}
              id="nickname"
              placeholder="Apelido"
              className={style.new_contact_input}
            ></Input>
          </div>
          <div className={style.input_wrapper}>
            <label htmlFor="cel-phone">Telefone Celular:</label>
            <Input
              value={celPhone}
              onChange={changeCelPhone}
              id="cel-phone"
              type="tel"
              placeholder="(99) 99999-9999"
              className={style.new_contact_input}
            ></Input>
          </div>
          <div className={style.input_wrapper}>
            <label htmlFor="home-phone">Telefone Casa:</label>
            <Input
              value={homePhone}
              onChange={changeHomePhone}
              id="home-phone"
              type="tel"
              placeholder="(99) 99999-9999"
              className={style.new_contact_input}
            ></Input>
          </div>
          <div className={style.input_wrapper}>
            <label htmlFor="work-phone">Telefone Trabalho:</label>
            <Input
              value={workPhone}
              onChange={changeWorkPhone}
              id="work-phone"
              type="tel"
              placeholder="(99) 99999-9999"
              className={style.new_contact_input}
            ></Input>
          </div>
          <div className={style.input_wrapper}>
            <label htmlFor="email">E-mail:</label>
            <Input
              value={email}
              onChange={changeEmail}
              id="email"
              type="email"
              placeholder="nome@email.com"
              className={style.new_contact_input}
            ></Input>
          </div>
          <div className={style.input_wrapper}>
            <label htmlFor="adress">Logradouro:</label>
            <Input
              value={adress}
              onChange={changeAdress}
              id="adress"
              type="text"
              placeholder="Logradouro"
              className={style.new_contact_input}
            ></Input>
          </div>
          <div className={style.input_wrapper}>
            <label htmlFor="zip-code">Cep:</label>
            <Input
              value={zipCode}
              onChange={changeZipCode}
              id="zip-code"
              type="text"
              placeholder="99999-999"
              className={style.new_contact_input}
            ></Input>
          </div>
          <div className={style.input_wrapper}>
            <label htmlFor="city">Cidade:</label>
            <Input
              value={city}
              onChange={changeCity}
              id="city"
              type="text"
              placeholder="Cidade"
              className={style.new_contact_input}
            ></Input>
          </div>
          <div className={style.input_wrapper}>
            <label htmlFor="state">Estado:</label>
            <Input
              value={state}
              onChange={changeState}
              id="state"
              type="text"
              placeholder="Estado"
              className={style.new_contact_input}
            ></Input>
          </div>
          <div className={style.input_wrapper}>
            <label htmlFor="country">País:</label>
            <Input
              value={country}
              onChange={changeCountry}
              id="country"
              type="text"
              placeholder="País"
              className={style.new_contact_input}
            ></Input>
          </div>
        </div>
        <div className={style.note_btn_wrapper}>
          <div className={style.note_wrapper}>
            <label htmlFor="note">Nota do contato:</label>
            <textarea
              value={notes}
              onChange={changeNotes}
              id="note"
              className={style.note_textarea}
            ></textarea>
          </div>
          <Button onClick={saveContact} className={style.save_btn}>
            Salvar
          </Button>
        </div>
      </fieldset>
    </form>
  )
}

export default Form
