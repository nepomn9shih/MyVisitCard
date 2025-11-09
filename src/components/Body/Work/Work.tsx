import {workBase} from "./workBase/workBase";
import {
  StyledWorkBlock,
  StyledWorkItem,
  StyledWorkItems,
  StyledWorkDate,
  StyledWorkDateItem,
  StyledWorkName,
  StyledWorkImage,
  StyledWorkPosition,
  StyledWorkDescription,
  StyledWorkCellItem
} from "./styles";
import {StyledContentTitle} from "../styles";

/** Раздел "Опыт работы" */
export const Work = () => {
  return (
    <StyledWorkBlock className="qa-work-block">
      <StyledContentTitle className="qa-work-block-title">
        Опыт работы
      </StyledContentTitle>
      <StyledWorkItems className="qa-work-block-items">
        {workBase
          .slice(0)
          .reverse()
          .map((work, index) => {
            return (
              <StyledWorkItem key={index} className={`qa-work-block-item-${index}`}>
                <StyledWorkDate className="qa-work-block-item-date">
                  <StyledWorkDateItem>
                    <b>Начало:</b> {work.date.from}
                  </StyledWorkDateItem>
                  <StyledWorkDateItem>
                    <b>Конец:</b> {work.date.to}
                  </StyledWorkDateItem>
                </StyledWorkDate>
                <StyledWorkName className="qa-work-block-item-name">
                  <div>{work.name}</div>
                </StyledWorkName>
                <StyledWorkImage className="qa-work-block-item-image">
                  <img src={work.img} alt="" />
                </StyledWorkImage>
                <StyledWorkPosition className="qa-work-block-item-position">
                  {work.position}
                </StyledWorkPosition>
                <StyledWorkDescription className="qa-work-block-item-description">
                  {work.description.map((duty, index) => {
                    return (
                      <StyledWorkCellItem
                        key={index}
                        className="qa-work-block-item-description-item"
                      >
                        {duty}
                      </StyledWorkCellItem>
                    );
                  })}
                </StyledWorkDescription>
              </StyledWorkItem>
            );
          })}
      </StyledWorkItems>
    </StyledWorkBlock>
  );
};
