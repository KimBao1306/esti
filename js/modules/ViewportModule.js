export default function ViewportModule() {
	if (document.body.offsetWidth <= 768) {
		function checkViewHeightBrowser() {
			// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
			let vh = (window.innerHeight * 0.01).toFixed(2);
			// Then we set the value in the --vh custom property to the root of the document
			document.documentElement.style.setProperty('--browser-vh', `${vh}px`);
		}
		checkViewHeightBrowser();
		window.addEventListener('resize', checkViewHeightBrowser);
	}
}
