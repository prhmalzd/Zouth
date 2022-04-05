import { useContext } from 'react'
import ImageContext from '../commonComponents/image-context'
import styles from './headChoose.module.css'
import OneHead from './OneHead'
import head1 from './images/1.png'
import head2 from './images/2.png'
import head3 from './images/3.png'
import head4 from './images/4.png'
import head5 from './images/5.png'


const HeadChoose = (props) => {
  const imageCtx = useContext(ImageContext)

  const onClickImageHandler = (event) => {
    event.preventDefault();
    const src = event.target.src
    const key = event.target.id
    const alt = event.target.alt
    imageCtx.addImage({srcHead: src, idHead: key, alt: alt})
  }
  return (
    <div className={styles.choosingArea}>
        <p>Choose your Avatar's head</p>
          <div className={styles.headContainer}>
            <OneHead
              onClickImageHandler={onClickImageHandler}
              id={'head1'}
              image ={head1}
            />
            <OneHead
              onClickImageHandler={onClickImageHandler}
              id={'head2'}
              image ={head2}
            />
            <OneHead
              onClickImageHandler={onClickImageHandler}
              id={'head3'}
              image ={head3}
            />
            <OneHead
              onClickImageHandler={onClickImageHandler}
              id={'head4'}
              image ={head4}
            />
            <OneHead
              onClickImageHandler={onClickImageHandler}
              id={'head5'}
              image ={head5}
            />
          </div>
    </div>
  )
}

export default HeadChoose;