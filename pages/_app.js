// pages/_app.js
import Head from 'next/head'
import SkipLink from '../components/SkipLink'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Our Awesome Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SkipLink />
		
		<header>
			<p>Navbar coming soon!</p>
    </header>
		
		<main id="main">
	    <Component {...pageProps} />
		</main>

		<footer>
			<p>Copyright Alexander Dubovoy, 2021.</p>
		</footer>
  </>
}

export default MyApp
