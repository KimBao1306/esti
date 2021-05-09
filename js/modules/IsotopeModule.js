export default function IsotopeModule() {
	if ($('.grids').length) {
		var $grids = $('.grids').isotope({
			itemSelector: '.grid',
			layoutMode: 'fitRows',
			getSortData: {
				price: '[data-price] parseInt',
				date: function (elem) {
					return parseInt($(elem).data('date'));
				},
			},
		});
		$grids.imagesLoaded().progress(function () {
			$grids.isotope('layout');
		});
		$('.grid-sort').on('click', function (x) {
			/* Get the value */
			var sortValue = $(this).attr('data-sort-by');
			/* Get the sorting direction: asc||desc */
			var direction = $(this).attr('data-sort-direction');
			/* convert it to a boolean */
			var isAscending = direction === 'asc';
			var newDirection = isAscending ? 'desc' : 'asc';
			isAscending
				? $(this).children('img').attr('src', 'images/sorting-up.svg')
				: $(this).children('img').attr('src', 'images/sorting-down.svg');

			/* pass it to isotope */
			$grids.isotope({sortBy: sortValue, sortAscending: isAscending});
			/* add new direction */
			$(this).attr('data-sort-direction', newDirection);
		});
	}
}
