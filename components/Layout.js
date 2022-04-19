import Navigation from './Navigation';

export default function Layout({ children }) {
	return (
		<>
			<Navigation />
			<main className='w-full bg-white mb-4 flex items-center flex-col justify-center py-10'>
				{children}
			</main>
		</>
	);
}
