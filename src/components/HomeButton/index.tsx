import styles from "./styles.module.css";
import Link from "next/link";
import { CLASS_NAME_STYLES } from '@component/constants'

export default function HomeButton() {
  return <Link 
      className="button"
      href="/"
    >
      Home
    </Link>
}