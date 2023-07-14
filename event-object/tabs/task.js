let tab = function() {
	let tabNav = Array.from(document.querySelectorAll('.tab'))
	let tabContent = Array.from(document.querySelectorAll('.tab__content'))

	tabNav.forEach(item => {
		item.addEventListener('click', selectTab)
	})

	function selectTab(e) {
		e.stopPropagation();
		tabNav.forEach(elem => {

			if (elem != this) {
				elem.classList.remove('tab_active')
			}
			tabContent.forEach(el => {
				if (el != this) {
					el.classList.remove('tab__content_active')
				}
			})
		})
		this.classList.add('tab_active')
		let index = tabNav.findIndex(n => n.classList.contains('tab_active'))
		tabContent[index].classList.add('tab__content_active')
	}
}
tab();