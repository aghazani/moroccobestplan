import HeaderGallery from '../HeaderGallery'
import Logo from '../Logo'
import MainNav from '../MainNav'

import css from './header.module.css'

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.infos}>
        <div className={css.logoArea}>
          <Logo />
        </div>
        <div className={css.navArea}>
          <MainNav />
        </div>
      </div>
      <div className={css.gallery}>
        <HeaderGallery />
      </div>
    </header>
  )
}
