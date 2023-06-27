import React from "react"
import cs from "clsx"
import styles from "./ListItemLayout.module.css"
export default function ListItemLayout({ children, className }) {
  return (
    <div className={cs(styles.wrapper, className)}>
      <input
        type="checkbox"
        className={styles.checkbox}
        //value={checked}
        //onChange={onChangeCheckBox}
      />
      {children}
    </div>
  )
}
