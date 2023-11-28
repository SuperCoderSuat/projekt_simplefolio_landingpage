import './SkillItem.css'

const SkillItem = (props) => {
    return (
        <button className='skill_btn'>{props.name}</button>
    );
}

export default SkillItem;