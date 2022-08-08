import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "../styles.css";
import ProductCard from './ProductCard';

export default ({ products, title }) => {
  return (
    <>
      <h4 className='swiper-title'> { title } </h4>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          products.map((product, i) => {
            return (
              <SwiperSlide key={i}>
                <Link to={`shop/${product.id}`}>
                  <ProductCard product={product}></ProductCard>
                </Link>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
};