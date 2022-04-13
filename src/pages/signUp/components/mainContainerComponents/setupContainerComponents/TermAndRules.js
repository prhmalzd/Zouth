import { useDispatch } from 'react-redux'
import { tnrActions } from '../../../../../store/termsAndRules'
import styles from './termAndRules.module.css'
import Button from '../../../../stuff/Button'


const TermAndRules = (props) => {
  const dispatch = useDispatch()

  const hidetnr = (event) => {
    event.preventDefault()
    dispatch(tnrActions.hidetnr())
  }
  return (
    <form className={styles.termAndRules} onSubmit={hidetnr}>
      <ol>
        <li>Have Fun!</li>
        <li>Have More Fun!</li>
        <li>Have Most Fun You Ever had In your Life!</li>
      </ol>
      <Button
        checkedBtn={true}
        name={"btn"}
        type={"submit"}
        value={"Got It"}
        bg={'16d6fa'}
      />
    </form>

  )
}

export default TermAndRules