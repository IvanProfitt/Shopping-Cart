import './App.css'
import { Link } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return(
  <>
  <NavBar />
  <Link to="cart">Cart</Link>
  </>
  )

}

export default App
