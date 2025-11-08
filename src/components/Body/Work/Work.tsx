import {workBase} from "./workBase/workBase";
import {
  WorkBlock,
  WorkItem,
  WorkItems,
  WorkDate,
  WorkDateItem,
  WorkName,
  WorkImage,
  WorkPosition,
  WorkDescription,
  WorkCellItem
} from "./styles";
import {ContentTitle} from "../styles";

export const Work = () => {
  return (
    <WorkBlock>
      <ContentTitle>
        Опыт работы
      </ContentTitle>
      <WorkItems>
        {workBase
          .slice(0)
          .reverse()
          .map((work, index) => {
            return (
              <WorkItem key={index}>
                <WorkDate>
                  <WorkDateItem>
                    <b>Начало:</b> {work.date.from}
                  </WorkDateItem>
                  <WorkDateItem>
                    <b>Конец:</b> {work.date.to}
                  </WorkDateItem>
                </WorkDate>
                <WorkName>
                  <div>{work.name}</div>
                </WorkName>
                <WorkImage>
                  <img src={work.img} alt="" />
                </WorkImage>
                <WorkPosition>
                  {work.position}
                </WorkPosition>
                <WorkDescription>
                  {work.description.map((duty, index) => {
                    return (
                      <WorkCellItem key={index}>
                        {duty}{" "}
                      </WorkCellItem>
                    );
                  })}
                </WorkDescription>
              </WorkItem>
            );
          })}
      </WorkItems>
    </WorkBlock>
  );
};
