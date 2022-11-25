import React from 'react';
import contents from '../lib/content';

type Props = {};

const Socials = (props: Props) => {
	const socialContent = contents.socialMediaLinks;

	return (
		<div
			aria-orientation="vertical"
			className="hidden xl:block w-[40px] fixed bottom-0 left-[40px] right-0 z-[10]"
		>
			<ul className="flex flex-col items-center m-0 p-0 gap-5 after:content-[''] after:block after:w-[1px] after:h-[90px] after:mx-auto after:my-0 after:bg-white text-white before:content-[''] before:block before:w-[1px] before:h-[180px] before:mx-auto before:my-0 before:bg-white">
				<li>
					<a
						href={socialContent.github.url}
						target="__blank"
						className="transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					>
						<socialContent.github.Icon size={22} />
					</a>
				</li>
				<li>
					<a
						href={socialContent.github.url}
						target="__blank"
						className="transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					>
						<socialContent.linkedin.Icon size={27} />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Socials;
