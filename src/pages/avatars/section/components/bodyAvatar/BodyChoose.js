
import styles from './bodyChoose.module.css'
import OneBody from './OneBody'
import body1 from './images/1.png'
import body2 from './images/2.png'


const BodyChoose = () => {
  return (
          <div className={styles.bodyContainer}>
            <OneBody
              image ={body1}
              text={'body of avatar'}
            />
            <OneBody
              image ={body2}
              text={'body of avatar'}
            />
          </div>
  )
}

export default BodyChoose;