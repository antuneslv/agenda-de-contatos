import style from './style.module.css'

function Button({ children, className, ...props }) {
  return (
    <button {...props} className={`${className} ${style.button}`}>
      {children}
    </button>
  )
}

export default Button
