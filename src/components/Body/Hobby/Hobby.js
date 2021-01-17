import { useState } from "react";
import hobbyImages from "./HobbyImages/hobbyImages";

const Hobby = () => {
    console.log("hobby")

   const [hobbyIndex, setHobbyIndex] = useState(0);

    return (
        <section class="content__hobby hobby">
        <h1 class="content__title">Мои увлечения</h1>
        <div class="hobby__items">
        {hobbyImages.map((hobby, index) => {
            return (
                <div class={(hobbyIndex === index)? "cellItem chosen" : "cellItem"} key={index} onClick={() => setHobbyIndex(index)}>
                    {hobby.name}    
                </div>
            )
        })}
        </div>
        <div class="hobby__image">
            <img src={hobbyImages[hobbyIndex].img} alt="" />
        </div>
    </section>  
    )
}

export default Hobby;