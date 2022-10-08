import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import Main from '../components/layout/Main'
import styles from '../styles/Home.module.css'
import ReviewContainer from '../components/review/ReviewContainer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Electronics Marketplace</title>
        <meta name="description" content="Selling electronics in this site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Main />

      <Footer />
      <ReviewContainer></ReviewContainer>
    </>
  )
}
