import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../button'
import style from './style.module.css'

const DeletContactModal = forwardRef(({ contactName, handleDelete }, ref) => {

  return (
    <dialog ref={ref} className={style.modal}>
      <h2 className={style.modal_title}>Apagar Contato?</h2>
      <p className={style.modal_text}>
        Você tem certeza que quer apagar o contato {contactName}?
      </p>
      <Button
        onClick={() => {
          ref.current.close()
        }}
        className={style.modal_cancel_btn}
      >
        Cancelar
      </Button>
      <Link to="/contatos">
        <Button onClick={handleDelete} className={style.modal_delete_btn}>
          Confirmar
        </Button>
      </Link>
    </dialog>
  )
})

export default DeletContactModal
