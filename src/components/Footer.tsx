import React from 'react';

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className='z-[3]'>
			<section className='mt-56 lg:mt-96 container mx-auto px-4 '>
				<div className='flex flex-col items-center'>
					<h2 className='text-4xl font-bold text-white text-center'>Want to discuss further?</h2>
					<a
						href='mailto:juned.buico@gmail.com'
						className='mt-5 border inline-block border-white py-2 px-3 md:py-3 md:px-5 bg-slate-900 text-white hover:text-black hover:bg-white transition ease-in duration-75'
					>
						Say Hi
					</a>
				</div>
				<div className='mt-72 flex flex-col items-center'>
					<span className='text-sm text-white'>All Rights Reserved.</span>
				</div>
			</section>
		</div>
	);
};

export default Footer;
