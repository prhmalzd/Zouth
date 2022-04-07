import React from "react";
import styles from './enterActionContainer.module.css'

const EnterActionContainer = () => {
  return (
      <div className={styles.enterActionContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M11 16v-2.048s-7.156-.066-11 4.048c1.806-7.861 11-9.913 11-9.913v-2.087l7.18 5.02-7.18 4.98zm6-10v2.184l3.891 2.836-3.891 2.835v2.145l7-4.98-7-5.02z"/></svg>
      </div>
  )
}

export default EnterActionContainer