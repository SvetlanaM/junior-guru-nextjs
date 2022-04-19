import { useRouter } from 'next/router';
import Image from 'next/image';
import Kure from '../../public/images/chicken.jpeg';

const UserProfile = () => {
	const router = useRouter();
	const { username } = router.query;

	return (
		<div className='p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 w-1/2'>
			<div className='flex justify-between items-center mb-4'>
				<div className='relative w-16 h-16 mb-3'>
					<Image
						src={Kure}
						alt='Kure'
						quality={100}
						priority
						className='rounded-md'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
					{username?.toLocaleUpperCase()}
				</h5>
			</div>
			<div className='flow-root'>
				<ul
					role='list'
					className='divide-y divide-gray-200 dark:divide-gray-700'>
					<li className='pt-3 pb-0 sm:pt-4'>
						<div className='flex items-center space-x-4'>
							<div className='flex-shrink-0'></div>
							<div className='flex-1 min-w-0'>
								<p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
									{username}
								</p>
								<p className='text-sm text-gray-500 truncate dark:text-gray-400'>
									email@windster.com
								</p>
							</div>
							<div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
								2367 tweets
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default UserProfile;
