import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALMALUX S.A.</title>
        <link rel="icon" href="/favicon.ico" />
        <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
      </Head>
    <body>
      <section>
        <Navbar />
        <Slider />
      </section>
      <section>
        <Content />
        <Footer />
      </section>
    </body>

    </div>
  )
}
