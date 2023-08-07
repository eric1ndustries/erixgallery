import Link from 'next/link';
import { CLASS_NAME_STYLES } from '../../constants';
import styles from './styles.module.css';

type TitleSubtitleProps = {
  title: string,
  subtitle?: string,
}

export default function Gateway(
  { entranceInfo, pathString, blank = false }: 
  {entranceInfo: TitleSubtitleProps, pathString: string, blank?: boolean }
  ){
  return (
      <Link
          href={pathString}
          className={CLASS_NAME_STYLES.LINK_BUTTON + ` ${styles.hide}`}
          rel="noopener noreferrer"
          target={`${blank ? "_blank" : ""}`}
        >
          <h3 className={`mb-3 text-2xl font-semibold`}>
            {entranceInfo?.title}{' '}
          </h3>
          <div>
            <p>
              {entranceInfo?.subtitle}
            </p>
          </div>
        </Link>
  )
}
