import { useContext } from 'react'
import ImageContext from '../commonComponents/image-context'
import styles from './noseChoose.module.css'
import OneNose from './OneNose'
import nose1 from './images/1.png'
import nose2 from './images/2.png'
import nose3 from './images/3.png'
import nose4 from './images/4.png'
import nose5 from './images/5.png'
import nose6 from './images/6.png'


const NoseChoose = (props) => {
  const imageCtx = useContext(ImageContext)

  const onClickImageHandler = (event) => {
    event.preventDefault();
    const src = event.target.src
    const key = event.target.id
    const alt = event.target.alt
    imageCtx.addImage({srcNose: src, idNose: key, alt: alt})
    props.onDoneAvatarCreating(imageCtx)
  }
  return (
    <div className={styles.choosingArea}>
        <p>Choose your Avatar's Nose</p>
          <div className={styles.noseContainer}>
            <OneNose
              onClickImageHandler={onClickImageHandler}
              id={'nose1'}
              image ={nose1}
            />
            <OneNose
              onClickImageHandler={onClickImageHandler}
              id={'nose2'}
              image ={nose2}
            />
            <OneNose
              onClickImageHandler={onClickImageHandler}
              id={'nose3'}
              image ={nose3}
            />
            <OneNose
              onClickImageHandler={onClickImageHandler}
              id={'nose4'}
              image ={nose4}
            />
            <OneNose
              onClickImageHandler={onClickImageHandler}
              id={'nose5'}
              image ={nose5}
            />
            <OneNose
              onClickImageHandler={onClickImageHandler}
              id={'nose6'}
              image ={nose6}
            />
          </div>
    </div>
  )
}

export default NoseChoose;