import Button from "./components/Button"
import Space from "./components/Space"
import Tabs from "./components/Tabs"
import styles from "./Header.module.css"
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          Watch <div className={styles.circle}>1</div>
        </Button>
        <Space />
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          Fork <div className={styles.circle}>1</div>
        </Button>
        <Space />
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          Star <div className={styles.circle}>1</div>
        </Button>
      </div>
      <Tabs title="title" number={5} />
    </div>
  )
}
