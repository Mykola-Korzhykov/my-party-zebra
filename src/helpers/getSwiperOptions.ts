const getSwiperOptions = () => {
    return {
        spaceBetween: 30,
        simulateTouch: false,
        loop: true,
        breakpoints: {
            320: {slidesPerView: 1}, 
            450: {slidesPerView: 2},
            720: {slidesPerView: 3}
        }
    }
}

export default getSwiperOptions;