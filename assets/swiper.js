console.log('swiper.js')

document.addEventListener('alpine:init', () => {
    Alpine.data('swiper', (params = {slidesPerView: 1}) => ({
        swiperInstance: null,
        init() {
            this.$nextTick(() => {
                this.swiperInstance = new Swiper(this.$el, {...params})
            })
        }
    }))
})