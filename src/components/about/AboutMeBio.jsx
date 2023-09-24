
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import logo from '../../../../mf-porto/src/images/profile.png';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img style={{ maxWidth: '400px'}} src={logo}/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-justify">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
