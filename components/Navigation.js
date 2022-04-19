import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
	{ id: 1, name: 'Kure tweetuje', link: '/' },
	{ id: 2, name: 'Sliepky', link: '/users' },
	{ id: 3, name: 'Kure', link: '/users/kure' },
	{ id: 4, name: 'Obi', link: `/users/${encodeURIComponent('obi')}` },
];

const Navigation = () => {
	const activeStyling = 'text-blue-800';
	const hrefStyling =
		'mr-6 text-teal no-underline hover:text-blue-800 font-bold';
	const router = useRouter();

	return (
		<div className='p-3 text-lg border-b border-solid border-yellow-light bg-yellow-200 text-black-800'>
			{links.map((linkItem) => (
				<Link href={linkItem.link} key={linkItem.id} passHref>
					<a
						className={`${hrefStyling} ${
							router.asPath === linkItem.link && activeStyling
						}`}>
						{linkItem.name}
					</a>
				</Link>
			))}
			{/* <a href='/users/kure'>Kure2</a> */}
			<button onClick={() => router.back()} className={hrefStyling}>
				Kam idem
			</button>
		</div>
	);
};

export default Navigation;
