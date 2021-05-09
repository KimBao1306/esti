export default function ScrollToTopModule() {
	/** SCROLL TO TOP */
	if ($('.scroll-top').length) {
		$('.scroll-top').on('click', function (e) {
			e.preventDefault();
			$('html, body').animate(
				{
					// scrollTop: $("#to").offset().top //scroll đến vị trí #to
					scrollTop: 0,
				},
				500
			);
			return false;
		});

		let lastScrollTop = 0;
		window.addEventListener('scroll', function () {
			const st = window.pageYOffset || document.documentElement.scrollTop;
			if (st <= 10) {
				$('.scroll-top').removeClass('--show');
				return;
			}
			if (st > lastScrollTop) {
				$('.scroll-top').removeClass('--show');
			} else {
				$('.scroll-top').addClass('--show');
			}
			lastScrollTop = st <= 0 ? 0 : st;
		});
	}
	/** SCROLL TO TOP - END*/
}
