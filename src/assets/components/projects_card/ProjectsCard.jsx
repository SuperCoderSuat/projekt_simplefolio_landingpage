import './ProjectsCard.css'

const ProjectsCard = (props) => {
    return (
        <div className='card_item'>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
            <div>
                <a href="#">Javascript</a>
                <a href="#">React</a>
                <a href="#">Sass</a>
            </div>
        </div>
    );
}

export default ProjectsCard;