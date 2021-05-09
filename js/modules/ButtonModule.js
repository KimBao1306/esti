export default function ButtonModule() {
	const setPositionOverlay = (e, b) => {
		// const headerBottomOffsetTop = document.querySelector('.header-bottom')
		// 	.offsetTop;
		// console.log(headerBottomOffsetTop);
		const x = e.pageX - b.offsetLeft;
		const y = e.pageY - b.offsetTop;
		b.style.setProperty('--x', x + 'px');
		b.style.setProperty('--y', y + 'px');
	};
	// document.querySelectorAll('.main-btn').forEach((b) => {
	// 	const span = document.createElement('span');
	// 	span.classList.add('btn-hover');
	// 	b.appendChild(span);
	// 	b.addEventListener('mouseover', (e) => setPositionOverlay(e, b));
	// 	b.addEventListener('mouseout', (e) => setPositionOverlay(e, b));
	// });
}
