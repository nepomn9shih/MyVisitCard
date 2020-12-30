import skillsList from './skillsList'

const Skills = () => {
    return (
        <section class="content__skills skills">
            <h1 class="content__title">Мои навыки</h1>
            <div class="skills__text">
            {skillsList.map((skill, index) => {
                return <div class="cellItem" key={index}>{skill} </div>
              })}
            </div>
        </section>  
    )
}

export default Skills;