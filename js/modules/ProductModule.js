export default function ProductModule() {
	// PRODUCT DETAIL
	function productDetail() {
		const thumbsS = new Swiper('.slider-detail-thumbs .swiper-container', {
			speed: 1200,
			autoplay: {
				delay: 5000,
			},
			spaceBetween: 8,
			slidesPerView: 4,
			loop: false,
			breakpoints: {
				768: {
					slidesPerView: 5,
				},
			},
		});
		const mainS = new Swiper('.slider-detail .swiper-container', {
			speed: 1200,
			autoplay: {
				delay: 5000,
			},
			spaceBetween: 8,
			slidesPerView: 1,
			navigation: {
				nextEl: $('.slider-detail .swiper-button-next'),
				prevEl: $('.slider-detail .swiper-button-prev'),
			},
			loop: false,
			thumbs: {
				swiper: thumbsS,
			},
			on: {
				init: function () {
					// AOS.refresh();
				},
			},
		});
	}
	$('.slider-detail .is-slider').length &&
		$('.slider-detail-thumbs .is-slider').length &&
		productDetail();
}
