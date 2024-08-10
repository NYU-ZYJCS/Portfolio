import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/algorithm-articles'
import { formatDate } from '@/lib/formatDate'
import { ARTICLES_PER_PAGE } from '@/lib/constant'
import Pagination from '@/components/Pagination'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/algorithm/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Explore my detailed write-ups on tackling various LeetCode problems, including strategies, solutions, and optimization tips, all organized in chronological order.',
}

export default async function ArticlesIndex() {
  const allArticles = await getAllArticles()
  console.log(allArticles.length)
  const articles = allArticles.slice(0, ARTICLES_PER_PAGE)
  const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE)
  console.log(totalPages, '--')
  return (
    <SimpleLayout
      title="Insights on LeetCode Algorithms and Problem Solving."
      intro="Explore my detailed write-ups on tackling various LeetCode problems, including strategies, solutions, and optimization tips, all organized in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
      <Pagination totalPages={totalPages} path="/algorithm" page={1} />
    </SimpleLayout>
  )
}
