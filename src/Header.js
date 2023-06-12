import Button from "./components/Button"
import Space from "./components/Space"
import styles from "./Header.module.css"
export default function Header() {
  return (
    <div className={styles.header}>
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
  )
}
