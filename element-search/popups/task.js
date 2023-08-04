let element = document.querySelector('.modal');
    element.classList.add('modal_active'); //активируем модальное окно при загрузке страницы

document.querySelector('.btn').addEventListener('click', function() { //переключаем active
    document.getElementById('modal_main').classList.toggle('modal_active');
    document.getElementById('modal_success').classList.toggle('modal_active');
  })

let modalClose = document.querySelectorAll('.modal__close');

for (let e of modalClose){
    e.addEventListener('click',() => {
        e.closest('.modal').classList.remove('modal_active') //деактивируем модальное окно при клике на крестик
    })
}

