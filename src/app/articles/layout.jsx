import { getGroups } from '@/lib/api'
import NavLink from '@/components/NavLink'

export default async function layout({ children }) {
  const groups = await getGroups()

  return (
    <div>
      <nav>
        {groups.map((group) => {
          const href = `/articles/${group.groupSlug}/${group.articles[0].articleSlug}`
          const activeHref = `/articles/${group.groupSlug}`
          return (
            <div key={href}>
              <NavLink href={href} activeHref={activeHref}>
                {group.title}
              </NavLink>
            </div>
          )
        })}
      </nav>

      {children}
    </div>
  )
}
