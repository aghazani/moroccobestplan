import PageWrapper from '@/components/PageWrapper'
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
      <header className="mb-20">
        <h1 className="text-4xl text-center p-4">{article.title}</h1>
        <p className="text-center text-xl font-light text-neutral-600">
          &ldquo; {article.introduction} &rdquo;
        </p>
        <figure>
          <img
            className="mt-10 mx-auto"
            src={article.images?.banner?.url}
            alt={`A picture of ${article.images?.banner?.caption}`}
            title={article.images?.banner?.caption}
            style={{ aspectRatio: '3/1', objectFit: 'contain' }}
          />
          <figcaption className="text-center text-sm my-2">
            {article.images?.banner?.caption}
          </figcaption>
        </figure>
      </header>
      <main className="mx-auto" style={{ maxWidth: 800 }}>
        {article.content.map((section) => (
          <section className="mb-10" key={section.title}>
            <h2 className="text-2xl mb-5 text-neutral-800">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p
                className="whitespace-pre-wrap text-lg text-justify mb-2 text-neutral-600"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              ></p>
            ))}
          </section>
        ))}
      </main>
    </article>
  )
}
