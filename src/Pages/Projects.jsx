import ProjectCards from "../Components/ProjectCards";
import SectionTitle from "../Components/SectionTitle";

const Projects = () => {
	return (
		<div id="projects" className="w-full flex justify-center ">
			<div className="w-full xl:w-[70%] flex flex-col pb-16">
				<div className="w-full ">
					<SectionTitle title="PROJECTS" subtitle="Some of my websites" />
				</div>
				<ProjectCards />
			</div>
		</div>
	);
};

export default Projects;
