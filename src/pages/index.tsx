import Image from "next/image"
import Link from "next/link"
import Entrance from "@component/components/Entrance"
import { PATHS, TITLE_SUBTITLE_OBJECTS, DESCRIPTIONS } from "@component/constants"

export default function Home() {
  return (
    <>
      <div className="group rounded-lg border border-transparent px-4 py-3">
          <h1 className={'mb-3 text-2xl font-semibold'}>
            <p>
              {DESCRIPTIONS.LANDING_FIRST}
            </p>
            <p>
              {DESCRIPTIONS.LANDING_SECOND}
            </p>
          </h1>
          <Entrance entranceInfo={TITLE_SUBTITLE_OBJECTS.RESUME} pathString={PATHS.RESUME} blank/>
          <Entrance entranceInfo={TITLE_SUBTITLE_OBJECTS.MULTIMEDIA} pathString={PATHS.MEDIA_PROJECTS}/>
          <Entrance entranceInfo={TITLE_SUBTITLE_OBJECTS.CODE} pathString={PATHS.CODE_PROJECTS}/>
          <Link href={PATHS.GALLERY}>
            <Image 
              className="graphic-btn"
              alt="I Am Waiting"
              src="/iAmWaiting.svg"
              width="500"
              height="400"
              title="Enter my gallery"
            />
          </Link>
      </div>
    </>
  )
}
