import NavLink from '@/components/NavLink'
import PageWrapper from '@/components/PageWrapper'
import { getGroup } from '@/lib/api'

import css from './layout.module.css'

export default async function layout({ params, children }) {
  const { groupSlug } = params
  const group = await getGroup(groupSlug)

  return (
    <PageWrapper>
      <div className="bg-white p-4">
        <nav className="mb-10 mt-5">
          <ul className="flex flex-wrap gap-2">
            {group.articles.map((article) => {
              const href = `/articles/${group.groupSlug}/${article.articleSlug}`
              return (
                <li className={css.link} key={href}>
                  <NavLink href={href}>{article.title}</NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        {children}
      </div>
    </PageWrapper>
  )
}
