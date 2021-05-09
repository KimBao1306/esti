export default function ReadmoreModule() {
	window.addEventListener('load', () => {
		document.querySelectorAll('.js-readmore').forEach((el) => {
			const heightLimit = el.getAttribute('data-height');
			const readmoreContent = el.querySelector('.js-readmore-content');
			const readmoreBtn = document.createElement('a');
			readmoreBtn.classList.add(...['js-readmore-btn', 'readmore-btn', 'line']);
			readmoreBtn.textContent = 'Xem thêm chi tiết';
			if (heightLimit && readmoreContent.offsetHeight > heightLimit) {
				readmoreContent.classList.add('hide');
				readmoreContent.style.height = heightLimit + 'px';
				readmoreContent.insertAdjacentElement('afterend', readmoreBtn);
			}
			readmoreBtn.addEventListener('click', (e) => {
				if (readmoreContent.classList.contains('hide')) {
					readmoreContent.style.height = readmoreContent.scrollHeight + 'px';
					readmoreContent.classList.remove('hide');
					readmoreBtn.textContent = 'Thu gọn chi tiết';
				} else {
					readmoreContent.style.height = heightLimit + 'px';
					readmoreContent.classList.add('hide');
					readmoreBtn.textContent = 'Xem thêm chi tiết';
				}
			});
		});
	});
}
