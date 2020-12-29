import galleryImages from './GalleryImages/galleryImages'

const Gallery = () => {
    return (
        <section class="content__gallery gallery">
        <h2 class="gallery__title">Галерея</h2>
        <div class="gallery__items">
        {galleryImages.map((photo, index) => {
            let isBig = index === 0 || index === 7
            return (
                <div 
                    class={isBig ? "gallery__item gallery__item_big" : "gallery__item"} 
                    key={index}
                >
                    <img src={photo} alt="" />
                </div>
            )
        })}
        
        </div>
    </section>  
    )
}

export default Gallery;