import { themeClass } from '@ds-pack/components'
import '@ds-pack/components/dist/vars.css'
import '@ds-pack/components/dist/reset.css'

export default function Layout({ children }) {
  return (
    <html lang="en-US" className={themeClass}>
      <body>
        <main>
          <header></header>
          <section>{children}</section>
          <footer></footer>
        </main>
      </body>
    </html>
  )
}
