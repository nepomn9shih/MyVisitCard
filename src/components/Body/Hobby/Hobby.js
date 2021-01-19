import { useState } from "react";
import { ContentTitle } from "../Skills/skillsStyles";
import hobbyImages from "./HobbyImages/hobbyImages";
import {
  HobbyBlock,
  HobbyImage,
  HobbyItems,
  HobbyCellItem,
} from "./HobbyStyles";

const Hobby = ({ isDarkMode }) => {
  const [hobbyIndex, setHobbyIndex] = useState(0);

  return (
    <HobbyBlock dark={isDarkMode}>
      <ContentTitle dark={isDarkMode}>Мои увлечения</ContentTitle>
      <HobbyItems dark={isDarkMode}>
        {hobbyImages.map((hobby, index) => {
          return (
            <HobbyCellItem
              dark={isDarkMode}
              isChosen={hobbyIndex === index}
              key={index}
              onClick={() => setHobbyIndex(index)}
            >
              {hobby.name}
            </HobbyCellItem>
          );
        })}
      </HobbyItems>
      <HobbyImage>
        <img src={hobbyImages[hobbyIndex].img} alt="" />
      </HobbyImage>
    </HobbyBlock>
  );
};

export default Hobby;
