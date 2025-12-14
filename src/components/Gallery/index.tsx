import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import {galleryImagesData} from "./assets/galleryImagesData";
import {
    StyledGalleryItems,
    StyledGalleryItem,
    StyledGalleryDescription
} from "./styles";
import {Section} from "../../ui-kit/components/Section";

/** Раздел "Галерея" */
export const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const onClick = (index: number) => {
        setOpen(true);
        setImageIndex(index);
    };

    const slides = [...galleryImagesData].sort((a, b) => a.year - b.year);

    return (
        <Section
            className="qa-gallery-block"
            text='Галерея'
        >
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Thumbnails]}
                slides={slides}
                index={imageIndex}
                className="qa-gallery-block-lightbox"
            />
            <StyledGalleryItems className="qa-gallery-block-photos">
                {slides.map(({alt, src}, index) => {
                    const isBig = index === 0 || index % 7 === 0 || index % 10 === 0

                    return (
                        <StyledGalleryItem
                            className={`qa-gallery-block-photo-${index}`}
                            isBig={isBig}
                            key={index}
                            onClick={() => onClick(index)}
                        >
                            <img src={src} alt={alt} />
                            <StyledGalleryDescription className={`qa-gallery-block-photo-description-${index}`}>
                                {alt}
                            </StyledGalleryDescription>
                        </StyledGalleryItem>     
                    );
                })}
            </StyledGalleryItems>
        </Section>  
    )
}
