import styles from './termAndRules.module.css'
import Button from '../../../../stuff/Button'
const TermAndRules = (props) => {
  const dosth = (event) => {
    event.preventDefault()
    props.gotitTermsAndRules()
  }
  return (
    <form className={styles.termAndRules} onSubmit={dosth}>
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