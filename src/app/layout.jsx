import '@/assets/css/base.css'
import Header from '@/components/Header/Header'

export const metadata = {
  title: 'bobo',
  description: 'Generated by create next app',
  keywords: 'too',
}

import css from './layout.module.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={css.main}>{children}</main>
      </body>
    </html>
  )
}
