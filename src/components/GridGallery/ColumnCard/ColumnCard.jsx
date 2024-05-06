import Link from 'next/link'
import css from './columnCard.module.css'

export default function ColumnCard({
  groupSlug,
  groupTitle,
  article,
  index = 1,
}) {
  return (
    <article className={css.card}>
      <Link href={`/articles/${groupSlug}/${article.articleSlug}`} />
      <img
        src={`/media/mock/image-${index}.jpg`}
        title={article.title}
        alt={article.title}
      />
      <div className={css.detail}>
        <h2>{groupTitle}</h2>
        <h3>
          {article.title} {index}
        </h3>
        <p>
          Discover the vibrant colors, captivating traditions, and warm
          hospitality of Morocco. From ancient medinas to stunning landscapes,
          embark on a journey of cultural exploration and unforgettable
          experiences.
        </p>
      </div>
    </article>
  )
}
