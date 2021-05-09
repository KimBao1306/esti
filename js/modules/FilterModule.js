export default function FilterModule() {
	$('.filter-mobile-wrap').on('click', function () {
		$('.filter').toggleClass('--active');
		$('body').toggleClass('stop-scrolling');
	});
	$('.filter .overlay').on('click', function () {
		$('.filter').removeClass('--active');
		$('body').removeClass('stop-scrolling');
	});
}
