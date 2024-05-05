import fs from 'fs'

const loadData = () => {
  const groupstDirPath = `_data/articles`
  const groupsDir = fs.readdirSync(groupstDirPath)

  const groups = []

  for (const groupDir of groupsDir) {
    const groupDirPath = `${groupstDirPath}/${groupDir}`
    const dir = fs.readdirSync(groupDirPath)
    const articles = []
    let group = {}
    for (const filename of dir) {
      const file = fs.readFileSync(`${groupDirPath}/${filename}`, 'utf-8')

      if (filename === 'index.json') {
        group = JSON.parse(file)
      } else {
        articles.push(JSON.parse(file))
      }
    }

    if (group.groupSlug) {
      groups.push({
        ...group,
        articles: articles.sort((a, b) => a.order - b.order),
      })
    }
  }

  return groups.sort((a, b) => a.order - b.order)
}

export const getGroups = () => {
  const data = loadData()

  return data
}

export const getGroup = (groupSlug) => {
  const data = loadData()

  return data.find((group) => group.groupSlug === groupSlug)
}

export const getArticle = (groupSlug, articleSlug) => {
  const group = getGroup(groupSlug)
  const article = group.articles.find(
    (article) => article.articleSlug === articleSlug
  )

  return {
    _group: group,
    ...article,
  }
}
