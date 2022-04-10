import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../button'
import style from './style.module.css'

const DeleteContactModal = forwardRef(({ contactName, handleDelete }, ref) => {

  return (
    <dialog ref={ref} className={style.modal}>
      <div className={style.modal_wrapper}>
        <h2 className={style.modal_title}>Apagar Contato?</h2>
        <p>
          Você tem certeza que quer apagar o contato <span className={style.modal_name}>{contactName}</span>?
        </p>
        <div className={style.modal_btns}>
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
        </div>
      </div>
    </dialog>
  )
})

export default DeleteContactModal
