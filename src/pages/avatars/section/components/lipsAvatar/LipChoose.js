import { useContext } from 'react'
import ImageContext from '../commonComponents/image-context'
import styles from './lipChoose.module.css'
import OneLip from './OneLip'
import lip1 from './images/1.png'
import lip2 from './images/2.png'
import lip3 from './images/3.png'
import lip4 from './images/4.png'
import lip5 from './images/5.png'
import lip6 from './images/6.png'


const LipChoose = (props) => {
  const imageCtx = useContext(ImageContext)

  const onClickImageHandler = (event) => {
    event.preventDefault();
    const src = event.target.src
    const key = event.target.id
    const alt = event.target.alt
    imageCtx.addImage({srcLip: src, idLip: key, alt: alt})
    props.onDoneAvatarCreating(imageCtx)
  }
  return (
    <div className={styles.choosingArea}>
        <p>Choose your Avatar's lip</p>
          <div className={styles.lipContainer}>
            <OneLip
              onClickImageHandler={onClickImageHandler}
              id={'lip1'}
              image ={lip1}
            />
            <OneLip
              onClickImageHandler={onClickImageHandler}
              id={'lip2'}
              image ={lip2}
            />
            <OneLip
              onClickImageHandler={onClickImageHandler}
              id={'lip3'}
              image ={lip3}
            />
            <OneLip
              onClickImageHandler={onClickImageHandler}
              id={'lip4'}
              image ={lip4}
            />
            <OneLip
              onClickImageHandler={onClickImageHandler}
              id={'lip5'}
              image ={lip5}
            />
            <OneLip
              onClickImageHandler={onClickImageHandler}
              id={'lip6'}
              image ={lip6}
            />
          </div>
    </div>
  )
}

export default LipChoose;