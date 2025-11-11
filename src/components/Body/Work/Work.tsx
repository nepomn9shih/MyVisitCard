import {ContentTitleBlock} from "../../../ui-kit/components/ContentTitleBlock";
import {workBase} from "./workBase/workBase";
import {
  StyledWorkBlock,
  StyledWorkItem,
  StyledWorkItems,
  StyledWorkImage
} from "./styles";
import {Text} from "../../../ui-kit/components/Text";
import {Box} from "../../../ui-kit/components/Box";

/** Раздел "Опыт работы" */
export const Work = () => {
  return (
    <StyledWorkBlock className="qa-work-block">
      <ContentTitleBlock text='Опыт работы' />
      <StyledWorkItems className="qa-work-block-items">
        {workBase
          .slice(0)
          .reverse()
          .map((work, index) => {
            return (
              <StyledWorkItem key={index} className={`qa-work-block-item-${index}`}>
                <Box
                  className="qa-work-block-item-date"
                  display='flex'
                  justifyContent='space-between'
                  alignItems='center'
                  p='8px'
                >
                  <Box
                    color='var(--main-color)'
                    bgColor='var(--item-color)'
                    borderRadius='10px'
                    m='2px'
                    p='4px 5px'
                  >
                    <Text
                      variation='descriptionS'
                      text={`<b>Начало:</b> ${work.date.from}`}
                    />
                  </Box>
                  <Box
                    color='var(--main-color)'
                    bgColor='var(--item-color)'
                    borderRadius='10px'
                    m='2px'
                    p='4px 5px'
                  >
                    <Text
                      variation='descriptionS'
                      text={`<b>Конец:</b> ${work.date.to}`}
                    />
                  </Box>
                </Box>
                <Box
                  className="qa-work-block-item-name"
                  color='var(--main-text-color)'
                  p='15px'
                  bgColor='var(--secondary-color)'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Text
                    variation='descriptionXL'
                    text={work.name}
                  />
                </Box>
                <StyledWorkImage className="qa-work-block-item-image">
                  <img src={work.img} alt="" />
                </StyledWorkImage>
                <Box
                  className="qa-work-block-item-position"
                  color='var(--main-text-color)'
                  p='15px'
                  bgColor='var(--secondary-color)'
                >
                  <Text
                    variation='descriptionM'
                    text={work.position}
                  />
                </Box>
                <Box
                  className="qa-work-block-item-description"
                  p='15px'
                  bgColor='var(--background-color)'
                  borderRadius='0 15px 15px'
                  display='flex'
                  flexDirection='column'
                  flexWrap='wrap'
                >
                  {work.description.map((duty, index) => {
                    return (
                      <Box
                        key={index}
                        className="qa-work-block-item-description-item"
                        bgColor='var(--item-color)'
                        borderRadius='10px'
                        m='5px'
                        p='4px 5px 6px'
                        boxShadow='var(--box-shadow)'
                      >
                        <Text
                          variation='descriptionM'
                          text={duty}
                        />
                      </Box>
                    );
                  })}
                </Box>
              </StyledWorkItem>
            );
          })}
      </StyledWorkItems>
    </StyledWorkBlock>
  );
};
