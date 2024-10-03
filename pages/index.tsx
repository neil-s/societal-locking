import Head from 'next/head';
import SampleName from '../components/SampleName';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Head>
        <title>Next.js Postgres Sample</title>
        <meta name="description" content="A sample Next.js app with Postgres" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Next.js Postgres Sample
        </h1>
        <SampleName />
      </main>
    </div>
  );
}