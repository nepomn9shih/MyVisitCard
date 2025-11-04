import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import {ContentTitle} from '../Skills/styles'
import {galleryImages} from './GalleryImages/galleryImages'
import {GalleryBlock, GalleryItems, GalleryItem, GalleryDescription} from './styles'

export const Gallery = ({isDarkMode}: {isDarkMode: boolean}) => {
    const [open, setOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const onClick = (index: number) => {
        setOpen(true);
        setImageIndex(index);
    };

    const imagesData = Object.keys(galleryImages).map((key, index) => {
        const data = key.split('_');
        const year = parseInt(data[1]);
        const description = data[0];

        return {
            year,
            alt: `${description} ${year}`,
            src: Object.values(galleryImages)[index]
        }
    }).sort((a, b) => a.year - b.year);

    return (
        <GalleryBlock dark={isDarkMode}>
        <ContentTitle dark={isDarkMode}>
            Галерея
        </ContentTitle>
        <Lightbox
            open={open}
            close={() => setOpen(false)}
            plugins={[Thumbnails]}
            slides={imagesData}
            index={imageIndex}
        />
        <GalleryItems>
            {imagesData.map(({alt, src}, index) => {
                let isBig = index === 0 || index % 7 === 0 || index % 10 === 0

                return (
                    <GalleryItem 
                        dark={isDarkMode}
                        isBig={isBig}
                        key={index}
                        onClick={() => onClick(index)}
                    >
                        <img src={src} alt={alt} />
                        <GalleryDescription>
                            {alt}
                        </GalleryDescription>
                    </GalleryItem>     
                )
            })}
        </GalleryItems>
    </GalleryBlock>  
    )
}
