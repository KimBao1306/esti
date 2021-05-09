export default function FormatPhoneNumber() {
	function format(phoneNumberString) {
		const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
		let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
		if (cleaned.length === 8) {
			match = cleaned.match(/^(\d{4})(\d{4})(\d{0})$/);
		}
		if (cleaned.length === 11) {
			match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
		}
		if (cleaned.length === 12) {
			match = cleaned.match(/^(\d{4})(\d{4})(\d{4})$/);
		}
		if (match) {
			return match[1] + ' ' + match[2] + ' ' + match[3];
		}
		return null;
	}
	if ($('.fm-phone').length) {
		$('.fm-phone').each(function (e, i) {
			if ($(this).find('img').length) return;
			const text = $(this).attr('href') || '0123456789';
			$(this).text(format(text));
		});
	}
}
