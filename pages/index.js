import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pastes.io App!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Pastes.io!" />
        <p className="description">
          Pastebin Alternative</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
