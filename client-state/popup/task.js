let element = document.getElementById('subscribe-modal');
    element.classList.add('modal_active'); //активируем модальное окно при загрузке страницы

let modalClose = document.querySelectorAll('.modal__close');
for (let e of modalClose){
    e.addEventListener('click',() => {
        e.closest('.modal').classList.remove('modal_active') //деактивируем модальное окно при клике на крестик
        document.cookie = "modal__close=yes; path=/ expires=";
        setCookie()
    })
}
function setCookie() {
    let date = new Date(Date.now() + 86400000); //Кука на 1 день
    date = date.toUTCString();
    document.cookie =  'name=close; expires=' + date;
    // getCookie()
};

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((c) => c.startsWith(name + '='));
    return cookie ? cookie.substring((name + '=' ).length) : null;
};

