import Layout from '../components/layout';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Kure tweetuje</title>
				<meta name='description' content='Jupi' />
			</Head>
			<Navigation />
			<main className='w-full bg-white mb-4 flex items-center flex-col justify-center py-10'>
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
