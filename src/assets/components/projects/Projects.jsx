import ProjectsHeadline from "../projects_headline/ProjectsHeadline";
import ProjectsCard from "../projects_card/ProjectsCard";
import './Projects.css'

const Projects = () => {
    return (
        <>
            <ProjectsHeadline/>
            <div className="card_container">
                <ProjectsCard
                    title={'Project 1'}
                    text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, consequatur. Sint, porro atque. Veritatis omnis accusamus ipsam, incidunt nisi officia iusto, eos ratione'}
                />
                <ProjectsCard
                    title={'Project 2'}
                    text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, consequatur. Sint, porro atque. Veritatis omnis accusamus ipsam, incidunt nisi officia iusto, eos ratione'}
                />
                <ProjectsCard
                    title={'Project 3'}
                    text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, consequatur. Sint, porro atque. Veritatis omnis accusamus ipsam, incidunt nisi officia iusto, eos ratione'}
                />
            </div>
        </>
    );
}

export default Projects;
