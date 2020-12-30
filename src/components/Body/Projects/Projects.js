import projectsImages from "./ProjectsImages/projectsImages";

const Projects = () => {
  return (
    <section class="content__products products">
      <h1 class="content__title">Мои проекты</h1>
      <div class="products__items">
        {projectsImages.slice(0).reverse().map((project, index) => {
          return (
            <div class="products__item" key={index}>
              <a href={project.link} class="products__image">
                <img src={project.img} alt="" />
              </a>
              <a href={project.link} class="products__name">
                {project.name}
              </a>
              <div class="products__technologies">
              {project.technologies.map((tech, index) => {
                return <div class="cellItem" key={index}>{tech} </div>
              })}
              </div>
              <div class="products__description">
              {project.description}
              </div>
              <a href={project.link}  class="products__button">
                Ссылка
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
