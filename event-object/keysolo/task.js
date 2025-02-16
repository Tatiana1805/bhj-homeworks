class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = container.querySelector('.timer');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;    
  }

  registerEvents() {
  	window.onload = document.addEventListener('keyup', (event) => {
  		let text = this.currentSymbol.textContent.toLowerCase()
  		if (event.key.toLowerCase() === text) {
  			this.success()
  		} else {
  			this.fail()
  		}
  	})
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    clearInterval(this.intervalId);
    const word = this.getWord(); 
    this.renderWord(word);
    this.timer.textContent = word.length;
    this.intervalId = setInterval(() => {
      this.timer.textContent -= 1;

      if (+this.timer.textContent === 0){
          this.fail();
    };
    }, 1000);
 


  // const word = this.getWord();
  // this.renderWord(word);
  // clearInterval(this.intervalId);
  // this.timer.textContent = word.length;
  // this.intervalId =  setInterval(() => {
  //   this.timer.textContent -= 1;

  //   if (+this.timer.textContent === 0){
  //       this.fail();
  // };
  // }, 1000);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))
