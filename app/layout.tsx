import { Metadata } from 'next'
import '@styles/globals.css'

export default function Layout({ children }) {
  return (
    <html lang="en-US" data-theme="winter">
      <body>
        <main className="min-h-screen">
          <header></header>
          <section>{children}</section>
          <footer></footer>
        </main>
      </body>
    </html>
  )
}

export let metadata: Metadata = {
  title: 'Template Next App',
  icons: [
    {
      url: '/favicon.ico',
      rel: 'shortcut icon',
    },
  ],
}
