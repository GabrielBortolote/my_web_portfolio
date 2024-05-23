import ViewWrapper from "@/components/ViewWrapper";
import StartView from "@/components/StartView";


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