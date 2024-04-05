import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faAdd } from "@fortawesome/free-solid-svg-icons"
import {faBook} from "@fortawesome/free-solid-svg-icons"
import "@/components/Darkmode.jsx"
import Darkmode from "@/components/Darkmode.jsx"

// import Darkmode from "@/components/Darkmode.jsx"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 justify-between items-center bg-slate-500 w-full h-20">
      <div className="max-w-md">  
       <div className="fixed top-3 left-14 min-w-12"> 
       <div>

        </div>
          <FontAwesomeIcon  icon={faBook} size="2x" />
        </div>
        <div className="fixed top-3 left-28 min-w-12">
          <Link href="/">
          <FontAwesomeIcon icon={faHome} size="2x" className="ml-5"/>
          </Link>
        </div>
        <div className="fixed top-3 right-32 min-w-12">
        <Darkmode />
        </div>
      <div className="fixed top-3 right-14 min-w-12">
        <Link href="/add_address_places">
          <FontAwesomeIcon icon={faAdd} size="2x" />
        </Link>
      </div>
      </div>
    </header>
  )
}

export default Header