import { Fragment } from 'react'
import ReactDom from 'react-dom'
import styles from './modal.module.css'

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onHideAddPost}></div>
}

const ModalOverlay = props => {
  return (
    <div className={styles.modal}>
      <div className={styles.adding}>{props.children}</div>
    </div>
  )
}

const  portalElement = document.getElementById('overlays')

const Modal = props => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onHideAddPost={props.onHideAddPost}/>, portalElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal