import AboutView from "@/components/views/about/AboutView";
import StartView from "@/components/views/start/StartView";
import WhatIveDoneView from "@/components/views/whatIveDone/WhatIveDoneView";
import { getDictionary } from '@/app/dictionaries'

export const metadata = {
  title: 'Gabriel B',
  description: 'Gabriel Bortolote Web Place',
}


export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang)
  return <>
    <StartView dict={dict}/>
    <WhatIveDoneView dict={dict}/>
    <AboutView dict={dict} lang={lang}/>
  </>
}