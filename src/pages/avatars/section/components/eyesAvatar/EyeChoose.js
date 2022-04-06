import { useContext } from 'react'
import ImageContext from '../commonComponents/image-context'
import styles from './eyeChoose.module.css'
import OneEye from './OneEye'
import eye1 from './images/1.png'
import eye2 from './images/2.png'
import eye3 from './images/3.png'
import eye4 from './images/4.png'
import eye5 from './images/5.png'
import eye6 from './images/6.png'


const EyeChoose = (props) => {
  const imageCtx = useContext(ImageContext)

  const onClickImageHandler = (event) => {
    event.preventDefault();
    const src = event.target.src
    const key = event.target.id
    const alt = event.target.alt
    imageCtx.addImage({srcEye: src, idEye: key, alt: alt})
    props.onDoneAvatarCreating(imageCtx)
  }
  return (
    <div className={styles.choosingArea}>
        <p>Choose your Avatar's eye</p>
          <div className={styles.eyeContainer}>
            <OneEye
              onClickImageHandler={onClickImageHandler}
              id={'eye1'}
              image ={eye1}
            />
            <OneEye
              onClickImageHandler={onClickImageHandler}
              id={'eye2'}
              image ={eye2}
            />
            <OneEye
              onClickImageHandler={onClickImageHandler}
              id={'eye3'}
              image ={eye3}
            />
            <OneEye
              onClickImageHandler={onClickImageHandler}
              id={'eye4'}
              image ={eye4}
            />
            <OneEye
              onClickImageHandler={onClickImageHandler}
              id={'eye5'}
              image ={eye5}
            />
            <OneEye
              onClickImageHandler={onClickImageHandler}
              id={'eye6'}
              image ={eye6}
            />
          </div>
    </div>
  )
}

export default EyeChoose;