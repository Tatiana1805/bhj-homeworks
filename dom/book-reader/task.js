let fontSizeLink = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book')
fontSizeLink.forEach(function(elem) {
	elem.addEventListener('click', function(i) {
		i.stopPropagation();
		i.preventDefault()
		fontSizeLink.forEach(el => {
			if (el != this) {
				el.classList.remove('font-size_active');
			}
		})
		this.classList.add('font-size_active')
		let size = elem.dataset.size
		if (size === "small") {
			book.classList.remove('book_fs-big')
			book.classList.add('book_fs-small')
		} else if (size === "big") {
			book.classList.remove('book_fs-small')
			book.classList.add('book_fs-big')
		} else {
			book.classList.remove('book_fs-small')
			book.classList.remove('book_fs-big')
		}
	})
})


let colorLink = document.querySelectorAll('.text_color_black, .text_color_gray, .text_color_whitesmoke');
colorLink.forEach(function(elem) {
	elem.addEventListener('click', function(i) {
		i.preventDefault();
		colorLink.forEach(el => {
			if (el != this) {
				el.classList.remove('color_active');
			}
		})
		this.classList.add('color_active');

		let color = elem.dataset.textColor;
		book.style.color = color;

	})
})

let colorBkc = document.querySelectorAll('.bg_color_black, .bg_color_gray, .bg_color_white')
colorBkc.forEach(function(elem) {
	elem.addEventListener('click', function(i) {
		i.preventDefault()
		colorBkc.forEach(el => {
			if (el != this) {
				el.classList.remove('color_active')
			}
		})
		this.classList.add('color_active')

		let bgColor = elem.dataset.bgColor;
		book.style.backgroundColor = bgColor;

	})
})