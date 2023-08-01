const pool = document.getElementById('poll__answers') //кнопки
const title = document.getElementById('poll__title') // вопрос
let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        // xhr.responseText = function (){
        //     console.log(xhr.responseText)
            let titleJson = JSON.parse(xhr.responseText)
            title.innerText = titleJson.data.title
         //   <div id="poll__title">${xhr.responseText}</div>
        // }  
        let answers = titleJson.data.answers
        for (let i = 0; i < answers.length; i++) {
            pool.insertAdjacentHTML('beforeEnd', 
            `
            <button class="poll__answer">${answers[i]}</button>
            `
            )
        }
        let button = document.querySelectorAll('.poll__answer');
        button.forEach(elem => {
         elem.addEventListener('click', event=>{
         event.preventDefault();
          alert ('Спасибо, ваш голос засчитан!');
         })
    })
        }
})
xhr.open('GET','https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()