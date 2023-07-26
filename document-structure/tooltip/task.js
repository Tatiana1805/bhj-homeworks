const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

const tooltips = (title, top, left) => {
	let tooltip = document.createElement('div');
	tooltip.textContent = title;
	tooltip.classList.add('tooltip');
	tooltip.classList.toggle('tooltip_active');

	tooltip.style.left = left + 'px';
	tooltip.style.top = (top + 18) + 'px';

	return tooltip;
}

hasTooltip.forEach(item => {
	item.addEventListener('click', (event) => {
		event.preventDefault();

		let tooltip = document.querySelector('.tooltip');
		let { top, left } = item.getBoundingClientRect();

		if (!tooltip) {
			item.insertAdjacentElement('afterend', tooltips(item.title, top, left));
		} else {
			tooltip.remove();
		}
	})
})



