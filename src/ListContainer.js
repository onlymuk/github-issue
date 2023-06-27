import React, { useState } from "react"
import Button from "./components/Button"
import styles from "./ListContainer.module.css"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItemLayout"

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open")
  return (
    <div className={styles.listContainer}>
      <div className={styles.topSection}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "rgba(27,331,0.15)",
            color: "white",
          }}
        >
          New Issue
        </Button>
      </div>
      <ListItemLayout className={styles.listFilter}>
        <div className={styles.filterLists}>
          <span>Author</span>
          <span>Label</span>
          <span>Projects</span>
          <span>Milestones</span>
          <span>Assignee</span>
        </div>
      </ListItemLayout>
      <div className={styles.container}>
        <ListItem />
      </div>
    </div>
  )
}
