export default function FormatPhoneNumber() {
	function format(phoneNumberString) {
		const cleaned = ('' + phoneNumberString).replace(/[a-zA-Z:]/g, '');
		let match = cleaned.match(/^(.{3})(.{3})(.{4})$/);
		if (cleaned.length === 8) {
			match = cleaned.match(/^(.{4})(.{4})(.{0})$/);
		}
		if (cleaned.length === 11) {
			match = cleaned.match(/^(.{3})(.{4})(.{4})$/);
		}
		if (cleaned.length === 12) {
			match = cleaned.match(/^(.{4})(.{4})(.{4})$/);
		}
		if (match) {
			return match[1] + ' ' + match[2] + ' ' + match[3];
		}
		return phoneNumberString;
	}
	if ($('.fm-phone').length) {
		$('.fm-phone').each(function (e, i) {
			if ($(this).find('img').length) return;
			const text = $(this).attr('href') || $(this).val() || '0123456789';
			$(this).text(format(text));
			$(this).val(format(text));
		});
	}

	let debouncePhone;
	$('.f-control.fm-phone').on('keyup', function () {
		if (debouncePhone) {
			clearTimeout(debouncePhone);
		}
		debouncePhone = setTimeout(() => {
			this.value = this.value.replace(/ /g, '');
			this.value = format(this.value);
		}, 300);
	});
}
