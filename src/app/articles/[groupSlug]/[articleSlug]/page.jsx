import { getArticle } from '@/lib/api'
import getArticlesSlugs from '@/lib/getArticlesSlugs'

export function generateStaticParams() {
  console.log('generating params')
  return getArticlesSlugs()
}

export async function generateMetadata({ params }) {
  const { groupSlug, articleSlug } = params
  const data = await getArticle(groupSlug, articleSlug)

  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
  }
}

export const dynamicParams = false

export default async function Article({ params }) {
  const { groupSlug, articleSlug } = params
  const article = await getArticle(groupSlug, articleSlug)

  return (
    <article>
      <h1 className="text-4xl p-4">{article.title}</h1>
      <section className="p-4 whitespace-pre-wrap">{article.content}</section>
    </article>
  )
}
