import { getGroup } from '@/lib/api'
import Link from 'next/link'

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
              <Link href={href}>{article.title}</Link>
            </li>
          )
        })}
      </nav>

      {children}
    </div>
  )
}
