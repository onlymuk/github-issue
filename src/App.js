import styles from "./App.module.css"
import Header from "./Header"
import Button from "./components/Button"

function App() {
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <Header />
      <div className={styles.listContainer}>
        ListContainer
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
      <div className={styles.footer}>footer</div>
    </>
  )
}

export default App
