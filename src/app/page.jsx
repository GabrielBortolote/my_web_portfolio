import ViewWrapper from "@/components/views/ViewWrapper";
import StartView from "@/components/views/start/StartView";


export default function Page() {
  return <>
    <StartView />
    <ViewWrapper>
      Experience Page
    </ViewWrapper>
    <ViewWrapper light>
      Skills Page
    </ViewWrapper>
    <div>Footer</div>
  </>
}