import productsImages from "./ProductsImages/productsImages";

const Products = () => {
  return (
    <section class="content__products products">
      <h2 class="products__title">Продукты</h2>
      <div class="products__items">
        {productsImages.map((product, index) => {
          return (
            <div class="products__item" key={index}>
              <a href="#1" class="products__image">
                <img src={product.img} alt="" />
              </a>
              <a href="#1" class="products__name">
                {product.name}
              </a>
              <a href="#1" class="products__button">
                Купить
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
