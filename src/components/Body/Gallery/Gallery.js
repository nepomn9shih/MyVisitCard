import { ContentTitle } from '../Skills/styles'
import galleryImages from './GalleryImages/galleryImages'
import { GalleryBlock, GalleryItems, GalleryItem } from './GalleryStyles'

const Gallery = ({isDarkMode}) => {
    return (
        <GalleryBlock dark={isDarkMode}>
        <ContentTitle dark={isDarkMode}>Галерея</ContentTitle>
        <GalleryItems>
        {galleryImages.map((photo, index) => {
            let isBig = index === 0 || index === 7
            return (
                <GalleryItem 
                    dark={isDarkMode}
                    isBig={isBig ? true : false} 
                    key={index}
                >
                    <img src={photo} alt="" />
                </GalleryItem>
            )
        })}
        </GalleryItems>
    </GalleryBlock>  
    )
}

export default Gallery;