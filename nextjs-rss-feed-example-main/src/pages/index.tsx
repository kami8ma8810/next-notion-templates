import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FEEDS } from '../lib/rss';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>


        <div className="px-6 py-12 max-w-xl mx-auto">
          <h1 className="font-bold text-5xl mb-12">Interesting RSS Feeds</h1>
          <div className="grid grid-cols-2 gap-4">
            {FEEDS.map((feed) => (
              <Link key={feed.slug} href={`/feeds/${feed.slug}`}>
                <a className="p-4 border border-gray-200 hover:border-gray-500 rounded-lg">{feed.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home