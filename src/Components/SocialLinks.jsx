import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
	return (
		<div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
			<a href="https://github.com/VeeGeR32" target="_blank">
				<FontAwesomeIcon
					className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
					icon={icons.faGithub}
				/>
			</a>
			<a href="mailto:aliounediallo32000@gmail.com" target="_blank">
				<FontAwesomeIcon
					className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
					icon={icons.faEnvelope}
				/>
			</a>
			<a href="https://discordapp.com/users/696483344552034416" target="_blank">
				<FontAwesomeIcon
					className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
					icon={icons.faDiscord}
				/>
			</a>
		</div>
	);
};

export default SocialLinks;
