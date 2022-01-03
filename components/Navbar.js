import { useRouter } from 'next/router'
import Link from 'next/link'

const NavbarLink = (props) => {
  const router = useRouter()
  const isActive = router.pathname === props.href
  const href = router.pathname === props.href ? '#main' : props.href

  return <li>
    {isActive && <span className="visually-hidden">Current page: </span>}
    <Link href={href}>
      <a aria-current={isActive}>
        {props.children}
      </a>
    </Link>
  </li>
}

const Navbar = () => {
  return <nav id="navigation">
    <ul role="list">
      <NavbarLink href="/">Home</NavbarLink>
      <NavbarLink href="/about">About</NavbarLink>
      <NavbarLink href="/contact">Contact</NavbarLink>
    </ul>
  </nav>
}

export default Navbar
