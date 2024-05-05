import Image from 'next/image'

import flagMorocco from '@/assets/images/layouts/flag_morocco.png'

import css from './logo.module.css'

export default function Logo() {
  return (
    <div className={css.logo}>
      <h1>MOROCCO</h1>
      <h2>
        <Image
          src={flagMorocco}
          title="Flag of Morocco"
          alt="An image of the Moroccan flag"
        />
        <span>Best Plan</span>
      </h2>
    </div>
  )
}
