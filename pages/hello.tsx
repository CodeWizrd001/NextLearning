import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Hello : NextPage = () => {
    return (
        <div className="container">
            <Head>
                <title>Hello World</title>
                <meta name="description" content="Hello World" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Hello World</h1>
                <Link href="/">
                    <a>Go to Home</a>
                </Link>
            </main>
        </div>
    )
}

export default Hello