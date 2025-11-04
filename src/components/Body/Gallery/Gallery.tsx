import {ContentTitle} from '../Skills/styles'
import {galleryImages} from './GalleryImages/galleryImages'
import {GalleryBlock, GalleryItems, GalleryItem} from './styles'

export const Gallery = ({isDarkMode}: {isDarkMode: boolean}) => {
    const imagesData = Object.keys(galleryImages).map((key, index) => {
        const data = key.split('_');

        return {
            year: parseInt(data[1]),
            description: data[0],
            image: Object.values(galleryImages)[index]
        }
    }).sort((a, b) => a.year - b.year);

    return (
        <GalleryBlock dark={isDarkMode}>
        <ContentTitle dark={isDarkMode}>Галерея</ContentTitle>
        <GalleryItems>
            {imagesData.map(({description, year, image}, index) => {
                let isBig = index === 0 || index % 7 === 0 || index % 10 === 0

                return (
                    <GalleryItem 
                        dark={isDarkMode}
                        isBig={isBig} 
                        key={index}
                    >
                        <img src={image} alt={`${description} ${year}`} />
                    </GalleryItem>
                )
            })}
        </GalleryItems>
    </GalleryBlock>  
    )
}
