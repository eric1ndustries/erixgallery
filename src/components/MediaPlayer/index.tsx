import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function MediaPlayer({url}: { url: string}) {
    return (
        <div>
          <ReactPlayer
            url={url}
            width="100%"
            height="75%"
            config={{
                soundcloud: {
                    options: {
                        sharing: true,
                    }
                }
            }}
          />       
        </div>
    )
}
