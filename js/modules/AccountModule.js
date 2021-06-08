export default function AccountModule() {
	// FORMAT PRICE VALUE
	let debouncePrice;
	$('.fm-price').each((_, p) => {
		p.value = p.value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	});
	$('.fm-price, .f-control.fm-phone').on('keypress', function (e) {
		const charCode = e.which ? e.which : e.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			e.preventDefault();
			return;
		}
	});
	$('.fm-price').on('keyup', function (e) {
		if (debouncePrice) {
			clearTimeout(debouncePrice);
		}
		debouncePrice = setTimeout(() => {
			this.value = this.value.replace(/ /g, '');
			this.value = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		}, 300);
	});
}
