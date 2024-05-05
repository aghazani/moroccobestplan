'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavLink({
  href,
  activeHref,
  exact,
  children,
  ...rest
}) {
  if (!activeHref) {
    activeHref = href
  }

  const pathname = usePathname()
  const exactPath = activeHref === pathname
  const startWith = !exact && pathname.startsWith(activeHref)

  return (
    <Link
      href={href}
      {...rest}
      className={exactPath || startWith ? 'active' : ''}
    >
      {children}
    </Link>
  )
}
