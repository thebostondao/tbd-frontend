import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Boston DAO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <video autoPlay loop muted>
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
      
    </div>
  )
}

export default Home
