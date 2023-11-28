import SkillItem from '../skill_item/SkillItem';
import './Skills.css'

const Skills = () => {
    return (
        <>
            <h2 className='pt50'>Skills</h2>
            <div className='skill_container p10'>
                <SkillItem
                    name={'HTML'}
                />
                <SkillItem
                    name={'CSS'}
                />
                <SkillItem
                    name={'Javascript'}
                />
                <SkillItem
                    name={'React'}
                />
            </div>
            <div className='skill_container'>
                <SkillItem
                    name={'SASS'}
                />
                <SkillItem
                    name={'Tailwind CSS'}
                />
                <SkillItem
                    name={'Git'}
                />
                <SkillItem
                    name={'UI/UX'}
                />
            </div>
        </>
    );
}

export default Skills;