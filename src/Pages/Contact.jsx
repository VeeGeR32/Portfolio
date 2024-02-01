import { LazyMotion, domAnimation, m } from "framer-motion";
import ContactForm from "../Components/ContactForm";
import SectionTitle from "../Components/SectionTitle";
import SocialLinks from "../Components/SocialLinks";

const Contact = () => {
	return (
		<div
			id="contact"
			className="w-full overflow-hidden-web flex flex-col items-center"
		>
			<div className="w-full flex flex-col">
				<SocialLinks />
				<div className="bg-grayscale-950 flex justify-center pb-4 text-grayscale-50">
					<span>
						Made by <a href="#"><em className="text-primary-400 hover:text-primary-500">@Alioune</em></a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Contact;
