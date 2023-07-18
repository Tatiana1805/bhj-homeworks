const reveal = document.querySelectorAll('.reveal');

function isVisible() {
	reveal.forEach((elem) => {
		const {
			top,
			bottom
		} = elem.getBoundingClientRect();
		if (top <= window.innerHeight || bottom > 0) {
			elem.classList.add('reveal_active')
		} else {
			elem.classList.remove('reveal_active')
		}
	})
}
window.addEventListener('scroll', isVisible)