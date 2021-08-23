import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        {title}
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" style={{color: '#F29F05', fontSize: '25px'}} to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className='siteFooter'>
        <div className='container'>
        Copyright © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.abilashvenkatesan.com">Abilash Venkatesan</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
