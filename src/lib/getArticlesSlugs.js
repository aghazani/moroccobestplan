import { getGroups } from './api'

export default function getArticlesSlugs() {
  const data = getGroups()

  const slugs = data.reduce((acc, group) => {
    const { groupSlug } = group
    const articles = group.articles

    articles.map(({ articleSlug }) => {
      acc.push({ groupSlug, articleSlug })
    })

    return acc
  }, [])

  return slugs
}
