import { useContext } from 'react'
import styles from './bodyChoose.module.css'
import OneBody from './OneBody'
import body1 from './images/1.png'
import body2 from './images/2.png'
import ImageContext from '../commonComponents/image-context'


const BodyChoose = (props) => {
  const imageCtx = useContext(ImageContext)

  const onClickImageHandler = event => {
    event.preventDefault();
    const src = event.target.src
    const id = event.target.id
    const alt = event.target.alt
    imageCtx.addImage({srcBody: src, idBody: id, alt: alt})
    props.onDoneAvatarCreating(imageCtx)
  }
  return (
    <div className={styles.choosingArea}>
        <p>Choose your Avatar's body</p>
          <div className={styles.bodyContainer}>
            <OneBody
              onClickImageHandler={onClickImageHandler}
              key={1}
              id={'body1'}
              image ={body1}
            />
            <OneBody
              onClickImageHandler={onClickImageHandler}
              key={2}
              id={'body2'}
              image ={body2}
            />
          </div>
        </div>
  )
}

export default BodyChoose;