import './portfolio/portfolio.css'
import PortNav from './portfolio/PortNav.jsx'
import Bio from './portfolio/Bio.jsx'
import Contacting from './portfolio/Contacting.jsx'
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
