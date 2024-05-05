import Link from 'next/link'

import { getGroups } from '@/lib/api'

export default async function layout({ children }) {
  const groups = await getGroups()

  return (
    <div>
      <nav>
        {groups.map((group) => {
          const href = `/articles/${group.groupSlug}/${group.articles[0].articleSlug}`
          return (
            <div key={href}>
              <Link href={href}>{group.title}</Link>
            </div>
          )
        })}
      </nav>

      {children}
    </div>
  )
}
