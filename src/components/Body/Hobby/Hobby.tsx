import {useState} from "react";
import {ContentTitle} from "../Skills/styles";
import {hobbyImages} from "./HobbyImages/hobbyImages";
import {
  HobbyBlock,
  HobbyImage,
  HobbyItems,
  HobbyCellItem,
} from "./styles";

export const Hobby = ({isDarkMode}: {isDarkMode: boolean}) => {
  const [hobbyIndex, setHobbyIndex] = useState(0);

  return (
    <HobbyBlock dark={isDarkMode}>
      <ContentTitle dark={isDarkMode}>Мои увлечения</ContentTitle>
      <HobbyItems>
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
      <HobbyImage dark={isDarkMode}>
        <img src={hobbyImages[hobbyIndex].img} alt="" />
      </HobbyImage>
    </HobbyBlock>
  );
};
