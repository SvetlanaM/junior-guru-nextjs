import React from 'react';

const Tweet = ({ title, content, link }) => {
	return (
		<div className='flex border-b border-solid border-grey-light px-4 w-1/2 py-5'>
			<div className='w-full p-3 pl-0'>
				<div className='flex justify-between'>
					<div className='w-full'>
						<span className='font-bold'>
							<span className='text-black'>Junior Guru</span>
						</span>
						<span className='text-grey-dark'>@kure</span>
					</div>
					<span className='text-gray-400 w-2/4 float-right text-right'></span>
				</div>

				<div>
					<div className='mb-4'>
						<p className='py-5'>🐣 {title}</p>
						<p className='mb-6'>{content}</p>
						<p className='mb-4'>
							<a href='#' className='text-teal'>
								{link}
							</a>
						</p>
					</div>
				</div>

				<div className='pb-2'>
					<span className='mr-8'>
						<a
							href='#'
							className='text-grey-dark hover:no-underline hover:text-blue-light'>
							<i className='fa fa-comment fa-lg mr-2'></i> 9
						</a>
					</span>
					<span className='mr-8'>
						<a
							href='#'
							className='text-grey-dark hover:no-underline hover:text-green'>
							<i className='fa fa-retweet fa-lg mr-2'></i> 29
						</a>
					</span>
					<span className='mr-8'>
						<a
							href='#'
							className='text-grey-dark hover:no-underline hover:text-red'>
							<i className='fa fa-heart fa-lg mr-2'></i> 135
						</a>
					</span>
					<span className='mr-8'>
						<a
							href='#'
							className='text-grey-dark hover:no-underline hover:text-teal'>
							<i className='fa fa-envelope fa-lg mr-2'></i>
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Tweet;
