import { getGroups } from '@/lib/api'
import NavLink from '../NavLink'
import css from './mainNav.module.css'

export default function MainNav() {
  const groups = getGroups()

  return (
    <div className={css.mainNav}>
      <nav>
        <ul>
          <li>
            <NavLink href="/" exact>
              <span>Home</span>
            </NavLink>
          </li>
          {groups.map((group) => {
            const href = `/articles/${group.groupSlug}/${group.articles[0].articleSlug}`
            const activeHref = `/articles/${group.groupSlug}`
            return (
              <li key={href}>
                <NavLink href={href} activeHref={activeHref}>
                  <span>{group.title}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
