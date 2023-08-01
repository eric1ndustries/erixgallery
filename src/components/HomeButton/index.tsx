import Link from 'next/link'
import { CLASS_NAME_STYLES } from '@component/constants'

export default function HomeButton() {
  return <div>
    <Link
     className={CLASS_NAME_STYLES.LINK_BUTTON}
     href="/"> Home </Link>
  </div>
}