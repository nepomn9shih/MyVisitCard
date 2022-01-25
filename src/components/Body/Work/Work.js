import { ContentTitle } from "../Skills/styles";
import workBase from "./workBase/workBase";
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
} from "./WorkStyles";

const Work = ({ isDarkMode }) => {
  return (
    <WorkBlock dark={isDarkMode}>
      <ContentTitle dark={isDarkMode}>Опыт работы</ContentTitle>
      <WorkItems>
        {workBase
          .slice(0)
          .reverse()
          .map((work, index) => {
            return (
              <WorkItem dark={isDarkMode} key={index}>
                <WorkDate>
                  <WorkDateItem dark={isDarkMode}>
                    <b>Начало:</b> {work.date.from}
                  </WorkDateItem>
                  <WorkDateItem dark={isDarkMode}>
                    <b>Конец:</b> {work.date.to}
                  </WorkDateItem>
                </WorkDate>
                <WorkName dark={isDarkMode}>
                  <div>{work.name}</div>
                </WorkName>
                <WorkImage dark={isDarkMode}>
                  <img src={work.img} alt="" />
                </WorkImage>
                <WorkPosition dark={isDarkMode}>{work.position}</WorkPosition>
                <WorkDescription dark={isDarkMode}>
                  {work.description.map((duty, index) => {
                    return (
                      <WorkCellItem dark={isDarkMode} key={index}>
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

export default Work;
