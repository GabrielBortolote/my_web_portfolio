export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>{'I\'m the general layout'}</h1>
        {children}
      </body>
    </html>
  )
}