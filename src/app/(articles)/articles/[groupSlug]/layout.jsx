import NavLink from '@/components/NavLink'
import { getGroup } from '@/lib/api'

export default async function layout({ params, children }) {
  const { groupSlug } = params
  const group = await getGroup(groupSlug)

  return (
    <div>
      <nav>
        {group.articles.map((article) => {
          const href = `/articles/${group.groupSlug}/${article.articleSlug}`
          return (
            <li key={href}>
              <NavLink href={href}>{article.title}</NavLink>
            </li>
          )
        })}
      </nav>

      {children}
    </div>
  )
}
