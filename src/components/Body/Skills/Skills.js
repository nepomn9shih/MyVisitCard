import skillsList from "./skillsList";

const Skills = () => {
  return (
    <section class="content__skills skills">
      <h1 class="content__title">Мои навыки</h1>
      <div class="skills__text">
        {skillsList.map((skill, index) => {
          return (
            <a
              href={"https://www.google.com/search?q=" + skill}
              target="_blank"
              class="cellItem"
              key={index}
              rel="noreferrer"
            >
              {skill}{" "}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
