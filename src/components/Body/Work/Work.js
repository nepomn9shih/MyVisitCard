import workBase from "./workBase/workBase";

const Work = () => {
  return (
    <section class="content__work work">
      <h1 class="content__title">Опыт работы</h1>
      <div class="work__items">
        {workBase
          .slice(0)
          .reverse()
          .map((work, index) => {
            return <div class="work__item" key={index}>
                <div class="work__date">
                    <div class="work__dateItem">
                      <b>Начало:</b> {work.date.from}
                    </div>
                    <div class="work__dateItem">
                      <b>Конец:</b> {work.date.to}
                    </div>
                </div>
                <div class="work__name">
                    <div>{work.name}</div>
                </div>
                <div class="work__image">
                    <img src={work.img} alt=""/>
                </div>
                <div class="work__position">
                    {work.position}
                </div>
                <div class="work__description">
                    {work.description.map((duty, index) => {
                return <div class="cellItem" key={index}>{duty} </div>
              })}
                </div>
            </div>;
          })}
      </div>
    </section>
  );
};

export default Work;
