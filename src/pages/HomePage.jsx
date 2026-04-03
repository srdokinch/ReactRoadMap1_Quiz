import { ROUTES } from '../const'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <h1>クイズアプリ</h1>
      <Link to={ROUTES.QUIZ}>クイズを始める</Link>
    </>
  )
}
