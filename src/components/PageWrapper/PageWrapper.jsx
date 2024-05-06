import css from './pageWrapper.module.css'

export default function PageWrapper({ children }) {
  return <div className={css.pageWrapper}>{children}</div>
}
