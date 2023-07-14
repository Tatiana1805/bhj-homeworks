let menuList = document.querySelector('.dropdown__list');

function OnClick() {
	menuList.classList.toggle('dropdown__list_active');

	let menuItem = Array.from(document.querySelectorAll('.dropdown__link'));
	menuItem.forEach(e => {
		e.addEventListener('click', (elem) => {
			elem.preventDefault();
			menuList.classList.remove('dropdown__list_active')
			btn.textContent = e.textContent
		})

	})
}

let btn = document.querySelector('.dropdown__value');
btn.addEventListener('click', OnClick);