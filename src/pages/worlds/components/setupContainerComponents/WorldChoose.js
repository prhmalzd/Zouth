
import styles from './worldChoose.module.css'
import ZouthLogo from '../../../stuff/ZouthLogo'
import OneWorld from './OneWorld'
import aot from '../../../stuff/images/aot.png'
import op from '../../../stuff/images/op.png'


const WorldChoose = () => {
  return (
    <div className={styles.worldChoose}>
      <ZouthLogo
        color={'af87ce'}
      />
      <div className={styles.choosingArea}>
        <p>Choose your World</p>
          <div className={styles.worldContainer}>
            <OneWorld
              image ={aot}
              text={'Attack On Titans'}
            />
            <OneWorld
              image ={op}
              text={'One Piece'}
            />
          </div>
      </div>
    </div>
  )
}

export default WorldChoose;