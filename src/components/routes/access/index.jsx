import { Outlet } from 'react-router-dom'
import style from './style.module.css'

function Access () {
  return (
    <div className={style.access_background}>
      <div className={style.access_wrapper}>
        <h1 className={style.access_title}>My Contacts Book</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default Access