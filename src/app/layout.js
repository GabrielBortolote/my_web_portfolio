import { Montserrat, Yellowtail } from 'next/font/google';
import localFont from 'next/font/local'

const montserrat = Montserrat({
    subsets: ['latin'],
    style: 'normal',
    variable: '--font-montserrat',
  })
  
  const yellowtail = Yellowtail({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
    variable: '--font-yellowtail',
})

const kagitingan = localFont({
  weight: '500',
  src: './fonts/kagitingan.otf',
  display: 'swap',
  variable: '--font-kagitingan',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${montserrat.variable} ${kagitingan.variable} ${yellowtail.variable}`}
    >
      <body>
        <h1>{'I\'m the general layout'}</h1>
        {children}
      </body>
    </html>
  )
}