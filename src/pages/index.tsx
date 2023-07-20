import Entrance from '@component/components/entrance'
import { PATHS, TITLE_SUBTITLE_OBJECTS } from '@component/constants'

export default function Home() {
  return (
    <>
      <div className="group rounded-lg border border-transparent px-4 py-3">
          <h1 className={'mb-3 text-2xl font-semibold'}>
            <p>
              Hey I'm Eric, a fullstack software engineer who loves to create.
            </p>
            <p>
              Check out my apps, music, videos, and other works here.
            </p>
          </h1>
      </div>
      <div className="mb-32 grid text-center lg:grid-cols-3 lg:mb-0 lg:text-left">
        <Entrance entranceInfo={TITLE_SUBTITLE_OBJECTS.CODE} pathString={PATHS.CODE_PROJECTS}/>
        <Entrance entranceInfo={TITLE_SUBTITLE_OBJECTS.MULTIMEDIA} pathString={PATHS.MEDIA_PROJECTS}/>
        <Entrance entranceInfo={TITLE_SUBTITLE_OBJECTS.RESUME} pathString={PATHS.RESUME}/>
      </div>
    </>
  )
}
