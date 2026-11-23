import './App.css'
import './My portfolio/portfolio.css'
import PortNav from './My portfolio/PortNav.jsx'
import Bio from './My portfolio/Bio.jsx'
import Contacting from './My portfolio/contacting.jsx'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
function App() {

  return (
    <>
    <PortNav/>
    <Bio/>
    <Contacting/>
    </>
  )

}

export default App;
