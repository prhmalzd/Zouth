import { useContext } from 'react'
import ImageContext from '../commonComponents/image-context'
import styles from './earChoose.module.css'
import OneEar from './OneEar'
import ear1 from './images/1.png'
import ear2 from './images/2.png'
import ear3 from './images/3.png'
import ear4 from './images/4.png'
import ear5 from './images/5.png'


const HeadChoose = (props) => {
  const imageCtx = useContext(ImageContext)

  const onClickImageHandler = (event) => {
    event.preventDefault();
    const src = event.target.src
    const key = event.target.id
    const alt = event.target.alt
    imageCtx.addImage({srcEar: src, idEar: key, alt: alt})
    props.onDoneAvatarCreating(imageCtx)
  }
  return (
    <div className={styles.choosingArea}>
        <p>Choose your Avatar's head</p>
          <div className={styles.earContainer}>
            <OneEar
              onClickImageHandler={onClickImageHandler}
              id={'ear1'}
              image ={ear1}
            />
            <OneEar
              onClickImageHandler={onClickImageHandler}
              id={'ear2'}
              image ={ear2}
            />
            <OneEar
              onClickImageHandler={onClickImageHandler}
              id={'ear3'}
              image ={ear3}
            />
            <OneEar
              onClickImageHandler={onClickImageHandler}
              id={'ear4'}
              image ={ear4}
            />
            <OneEar
              onClickImageHandler={onClickImageHandler}
              id={'ear5'}
              image ={ear5}
            />
          </div>
    </div>
  )
}

export default HeadChoose;