import Link from 'next/link';
import styles from "./styles.module.css";
import { CLASS_NAME_STYLES } from '@component/constants';

type TitleSubtitleProps = {
  title: string,
  subtitle?: string,
}

export default function Entrance(
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
