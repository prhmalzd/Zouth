import { useContext } from 'react'
import ImageContext from '../commonComponents/image-context'
import styles from './eyebrowChoose.module.css'
import OneEyeBrow from './OneEyebrow'
import eyeBrow1 from './images/1.png'
import eyeBrow2 from './images/2.png'
import eyeBrow3 from './images/3.png'
import eyeBrow4 from './images/4.png'
import eyeBrow5 from './images/5.png'


const HeadChoose = (props) => {
  const imageCtx = useContext(ImageContext)

  const onClickImageHandler = (event) => {
    event.preventDefault();
    const src = event.target.src
    const key = event.target.id
    const alt = event.target.alt
    imageCtx.addImage({srcEyeBrow: src, idEyeBrow: key, alt: alt})
    props.onDoneAvatarCreating(imageCtx)
  }
  return (
    <div className={styles.choosingArea}>
        <p>Choose your Avatar's head</p>
          <div className={styles.eyeBrowContainer}>
            <OneEyeBrow
              onClickImageHandler={onClickImageHandler}
              id={'eyeBrow1'}
              image ={eyeBrow1}
            />
            <OneEyeBrow
              onClickImageHandler={onClickImageHandler}
              id={'eyeBrow2'}
              image ={eyeBrow2}
            />
            <OneEyeBrow
              onClickImageHandler={onClickImageHandler}
              id={'eyeBrow3'}
              image ={eyeBrow3}
            />
            <OneEyeBrow
              onClickImageHandler={onClickImageHandler}
              id={'eyeBrow4'}
              image ={eyeBrow4}
            />
            <OneEyeBrow
              onClickImageHandler={onClickImageHandler}
              id={'eyeBrow5'}
              image ={eyeBrow5}
            />
          </div>
    </div>
  )
}

export default HeadChoose;