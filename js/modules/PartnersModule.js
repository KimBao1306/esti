export default function PartnersModule() {
	$('.partners-special-item').hover(function () {
		const id = $(this).attr('data-id-hover');
		$('.partners-special-hover').stop().slideUp();
		$(id).stop().slideDown();
	});
}
