import dynamic from "next/dynamic";
import Theater from "@component/components/Theater";

const HomeButton = dynamic(() => import("@component/components/HomeButton"), { ssr: false });

export default function MultimediaProjects() {
  return (
    <div >
      <Theater />
      <HomeButton />
    </div>         
  )
}
