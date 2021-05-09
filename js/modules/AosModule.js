export default function AosModule() {
	/** ANIMATION ON SCROLL */
	AOS.init({
		startEvent: 'DOMContentLoaded',
		offset: -90,
		duration: 400,
		delay: 0,
		easing: 'ease-in-sine',
		once: true,
		mirror: true,
		disable: function () {
			return $(window).width() <= 768;
		},
	});
	/** ANIMATION ON SCROLL - END */
}
