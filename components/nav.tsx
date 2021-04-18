import path from 'path'
import fs from 'fs'

const pagesDir = path.join(process.cwd(), 'pages')

export function getNavPages() {
  const filenames = fs.readdirSync(pagesDir)

  
}