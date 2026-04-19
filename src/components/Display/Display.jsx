import styles from './display.module.css'

export default function Display({ children }) {
  return (
    <div className={styles.display}>
      {children}
    </div>
  )
}