export default function QuestionModule() {
	$('.contact__tabs-content .content .question').on('click', function () {
		$(this).parent().siblings().removeClass('--active');
		$(this).parent().addClass('--active');
	});
}
