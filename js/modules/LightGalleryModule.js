export default function LightGalleryModule() {
	/** LIGHTGALLERY */
	if ($('.is-lightgallery').length) {
		// GALLERY NORMAL
		const $lg = $('.is-lightgallery');
		$lg.lightGallery({
			thumbnail: true,
		});
	}
	// GALLERY GROUP
	/* data-thumbs demo - không được có khoảng cách
    [
      {
        "src":"images/library-item-1.png",
        "thumb":"images/library-item-1.png"
      }
    ]
  */
	$('.is-lightgallery-thumbs').on('click', function (e) {
		e.preventDefault();
		let thumbs = $(this).find('.img').attr('data-thumbs');
		thumbs = thumbs && $.parseJSON(thumbs);
		if (thumbs) {
			$(this).lightGallery({
				dynamic: true,
				dynamicEl: thumbs,
				thumbnail: true,
				animateThumb: true,
				showThumbByDefault: true,
			});
		}
	});
	/** LIGHTGALLERY - END*/
}
