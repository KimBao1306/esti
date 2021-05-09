export default function MenuDropdownModule() {
	if ($('.header').length) {
		/** MENU IN MOBILE */
		$('.header__list  .dropdown,.header__list  .big-dropdown').each(
			function () {
				const dropdown = $(this);
				const arrows = $('<i></i>');
				arrows.addClass('fa fa-angle-down');
				dropdown.find('a').eq(0).append(arrows);
			}
		);

		$('.header__list .dropdown .fa').each(function () {
			const dropdown = $(this).closest('.dropdown');
			$(this).on('click', function (e) {
				e.preventDefault();
				// CLOSE MENU SIBLING
				dropdown.siblings().removeClass('--show');
				dropdown.siblings().find('.sub-menu').slideUp();
				dropdown.siblings().find('.fa').removeClass('--active');

				// OPEN MENU CLICKED
				dropdown.toggleClass('--show');
				$(this).parent().next('.sub-menu').stop().slideToggle();
				$(this).toggleClass('--active');
			});
		});

		// HOVER

		$('.big-dropdown >.sub-menu > .sub-menu-wrap >ul> li').on(
			'mouseover',
			function () {
				$(this).siblings().removeClass('current-menu-item');
				$(this).addClass('current-menu-item');
			}
		);
		/** MENU IN MOBILE - END */
	}
}
