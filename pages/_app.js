import { Router } from 'next/router';
import Layout from '../components/layout';
import '../styles/globals.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return <Component {...pageProps} />;
}

export default MyApp;
