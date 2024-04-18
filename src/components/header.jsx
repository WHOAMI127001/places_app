/* eslint-disable no-duplicate-imports */
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faAdd } from "@fortawesome/free-solid-svg-icons"
import {faBook} from "@fortawesome/free-solid-svg-icons"
import Darkmode from"@/components/Darkmode"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 justify-between items-center bg-slate-500 w-full h-20">
      <div className="fixed top-3 left-8 sm:left-14 min-w-12 "> 
          <FontAwesomeIcon  icon={faBook} size="2x" />
        </div>
        <div className="fixed top-3 left-14 sm:left-28 min-w-12">
          <Link href="/">
          <FontAwesomeIcon icon={faHome} size="2x" className="ml-5"/>
          </Link>
        </div>
        <div className="fixed top-3 right-20 sm:right-32 min-w-12">
        <Darkmode />
        </div>
      <div className="fixed top-3 right-2 sm:right-14 min-w-12">
        <Link href="/add_address_places">
          <FontAwesomeIcon icon={faAdd} size="2x" />
        </Link>
      </div>
    </header>
  )
}

export default Header