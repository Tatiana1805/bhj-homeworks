const sliderLine = document.querySelectorAll('.slider__item') //массив картинок
// кнопки
const clickPrev = document.querySelector('.slider__arrow_prev')
const clickNext = document.querySelector('.slider__arrow_next')
// const slides = Array.from(sliderLine.querySelector('img'));
let slideCount = sliderLine.length; //длина массива
let slideIndex = 0; //индекс картинки
// Устанавливаем обработчики событий для кнопок
clickPrev.addEventListener('click', showPreviousSlide);
clickNext.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  sliderLine[slideIndex].classList.remove('slider__item_active')
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  sliderLine[slideIndex].classList.add('slider__item_active')
}

// Функция для показа следующего слайда
function showNextSlide() {
 sliderLine[slideIndex].classList.remove('slider__item_active')  
  slideIndex = (slideIndex + 1) % slideCount;
  sliderLine[slideIndex].classList.add('slider__item_active')
}