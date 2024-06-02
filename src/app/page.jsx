import AboutView from "@/components/views/about/AboutView";
import StartView from "@/components/views/start/StartView";

export const metadata = {
  title: 'Gabriel B',
  description: 'Gabriel Bortolote Web Place',
}

export default function Page() {
  return <>
    <StartView />
    <AboutView/>
  </>
}