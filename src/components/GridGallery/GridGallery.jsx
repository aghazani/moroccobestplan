import { getGroups } from '@/lib/api'
import ColumnCard from './ColumnCard'

import css from './gridGallery.module.css'

export default function GridGallery() {
  const groups = getGroups()
  let i = 1

  return (
    <section className={css.grid}>
      {groups.map((group) =>
        group.articles.map((article) => (
          <ColumnCard
            key={article.articleSlug}
            groupTitle={group.title}
            groupSlug={group.groupSlug}
            article={article}
            index={i++}
          />
        ))
      )}
    </section>
  )
}
