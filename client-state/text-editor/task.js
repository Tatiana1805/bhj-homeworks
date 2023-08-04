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
    localStorage.removeItem('text');
    textEditor.value = '';
})
