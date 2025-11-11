import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import {galleryImages} from "./assets/galleryImages";
import {
    StyledGalleryItems,
    StyledGalleryItem,
    StyledGalleryDescription
} from "./styles";
import { Section } from "../../../ui-kit/components/Section";

/** Раздел "Галерея" */
export const Gallery = () => {
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
        <Section
            className="qa-gallery-block"
            text='Галерея'
        >
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Thumbnails]}
                slides={imagesData}
                index={imageIndex}
                className="qa-gallery-block-lightbox"
            />
            <StyledGalleryItems className="qa-gallery-block-photos">
                {imagesData.map(({alt, src}, index) => {
                    let isBig = index === 0 || index % 7 === 0 || index % 10 === 0

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
