// localStorage
// setItem() (запись ключ-значение в локал) localStorage.setItem('key', 'value')
// getItem() (чтение по ключу)
// записываем в localStorage <textarea id="editor" cols="30" rows="10"></textarea> и сохраняем каждое нажатие
//добавляем чтение (чтобы после перезагрузки текст остался)

const textEditor = document.getElementById('editor')
const storeText = {}

textEditor.addEventListener('input', (e) => {
    localStorage.setItem('text', textEditor.value)
})
window.onload = function () {
    let textNew = localStorage.getItem('text')
    textEditor.value = textNew;
}
let button = document.getElementById('button');
button.addEventListener('click', () =>{
    textEditor.value = '';
})
