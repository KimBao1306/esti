export default function FlatPickrModule() {
	/** FLATPICKER */
	if ($('.flatpickr-input').length) {
		const toDate = flatpickr('#to-date', {
			disableMobile: 'true',
			dateFormat: 'd/m/Y ',
			// enableTime: true,
			time_24hr: true,
		});
		const fromDate = flatpickr('#from-date', {
			disableMobile: 'true',
			dateFormat: 'd/m/Y ',
			// enableTime: true,
			time_24hr: true,
			onReady: function () {
				// this.set('minDate', new Date());
			},
			onChange: function (selectedDates, dateStr, instance) {
				// toDate.set('minDate', dateStr);
			},
		});
	}
	/** FLATPICKER - END */
}
