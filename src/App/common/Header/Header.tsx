import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router'
import { Icon } from '@mui/material';
import './Header.scss'

function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const headerRightRef = useRef<HTMLDivElement>(null)
  const appIconRef = useRef<HTMLDivElement>(null)
  const headerCtnrRef = useRef<HTMLElement>(null)

  const applyVisibleNavBar = (headerRightRef: React.RefObject<HTMLDivElement | null>, appIconRef: React.RefObject<HTMLDivElement | null>) => {
    if (!headerRightRef.current?.classList || !appIconRef.current?.classList) return
    const rightHeaderClasslist: DOMTokenList = headerRightRef.current?.classList
    const appIconClassList: DOMTokenList = appIconRef.current?.classList

    rightHeaderClasslist.toggle("header-right-visible")
    appIconClassList.toggle("app-icon-ctnr-rotate")
    setIsVisible(!isVisible)
  }

    const removeVisibleNavBar = (headerRightRef: React.RefObject<HTMLDivElement | null>, appIconRef: React.RefObject<HTMLDivElement | null>) => {
    if (!headerRightRef.current?.classList || !appIconRef.current?.classList) return
    const rightHeaderClasslist: DOMTokenList = headerRightRef.current?.classList
    const appIconClassList: DOMTokenList = appIconRef.current?.classList

    rightHeaderClasslist.remove("header-right-visible")
    appIconClassList.remove("app-icon-ctnr-rotate")
    setIsVisible(false)
  }

  useEffect(() => {
    window.addEventListener('resize', (event) => {
      if (!headerCtnrRef.current?.scrollWidth) return;

      if (headerCtnrRef.current?.scrollWidth >= 770) {

        removeVisibleNavBar(headerRightRef, appIconRef);
        console.log(isVisible)
      }
    })
  }, [isVisible])
/*   const headerWidth = headerCtnrRef.current?.scrollWidth 
  console.dir(headerCtnrRef.current) */

  return (
  <header className="global-header-wrapper" ref={headerCtnrRef}>
    <div className="header-left" onClick={() => {
          applyVisibleNavBar(headerRightRef, appIconRef)
        }}>
      <Link to="/" className="header-left-link-el">
      <span>L</span>
      orenzo
      </Link>
    </div>
    <div className="header-right header-right-responsive" ref={headerRightRef}>
      <ul>
        <li onClick={() => {
          applyVisibleNavBar(headerRightRef, appIconRef)
        }}><Link to="/aboutme">About Me</Link></li>
        <li onClick={() => {
          applyVisibleNavBar(headerRightRef, appIconRef)
        }}><Link to="/portfolio">Portfolios</Link></li>
        <li onClick={() => {
          applyVisibleNavBar(headerRightRef, appIconRef)
        }}><Link to="/contacts">Contacts</Link></li>
        <li onClick={() => {
          applyVisibleNavBar(headerRightRef, appIconRef)
        }}>Merchandising</li>
      </ul>
      <button>
      <i className="bi bi-person-circle fs-3" style={{
        fontSize: '1.5rem'
      }}></i>
        Sign In
      </button>
    </div>
    <div className="app-icon-ctnr" onClick={() => applyVisibleNavBar(headerRightRef, appIconRef)} ref={appIconRef}>
      {isVisible ? <Icon>close</Icon> : <Icon>menu</Icon>}
    </div>
  </header>
  )
}

export default Header