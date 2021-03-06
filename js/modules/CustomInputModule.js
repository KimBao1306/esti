export default function CustomInputModule() {
	// SHOW HIDDEN PASSWORD
	if ($('.f-psw').length) {
		const icon = $('.f-psw').find('.fa');
		const input = $('.f-psw').find('.f-control');
		icon.on('click', function () {
			if (input.attr('type') === 'password') {
				input.attr('type', 'text');
			} else {
				input.attr('type', 'password');
			}
			$(this).toggleClass('fa-eye fa-eye-slash');
		});
	}
	// AVATAR INPUT
	const uploadImage = (inputFile, previewImage) => {
		inputFile.addEventListener('change', function () {
			const file = this.files[0];
			if (file) {
				const reader = new FileReader();
				reader.addEventListener('load', function () {
					previewImage.setAttribute('src', this.result);
				});
				reader.readAsDataURL(file);
			}
		});
	};
	if (
		document.getElementById('js-avatar-preview') &&
		document.getElementById('account-avatar')
	) {
		const inputFile = document.getElementById('account-avatar');
		const previewImage = document.getElementById('js-avatar-preview');
		uploadImage(inputFile, previewImage);
	}

	// UPDATE ẢNH SẢN PHẨM BÁO GIÁ
	if (
		document.querySelectorAll('.js-order-upload-img-preview').length &&
		document.querySelectorAll('.js-order-upload-img').length
	) {
		const inputFile = document.querySelectorAll('.js-order-upload-img');
		const previewImage = document.querySelectorAll(
			'.js-order-upload-img-preview'
		);
		inputFile.forEach((t, i) => {
			uploadImage(t, previewImage[i]);
		});
	}
}
