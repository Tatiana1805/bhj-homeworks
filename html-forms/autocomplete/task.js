class Autocomplete {
  constructor( container ) {
    this.container = container;
    this.input = container.querySelector( '.autocomplete__input' ); //варианты слов
    this.searchInput = container.querySelector( '.autocomplete__search' );//поиск
    this.list = container.querySelector( '.autocomplete__list' );//окно при нажатии становится активным
    this.valueContainer = container.querySelector( '.autocomplete__value' ); 
    this.valueElement = container.querySelector( '.autocomplete__text-content' ); //текст в поиске

    this.registerEvents();
  }
//обработать событие щелчка на элементе
  registerEvents() {
    this.valueContainer.addEventListener( 'click', e => {
      this.searchInput.classList.add( 'autocomplete__search_active' );
      this.list.classList.add( 'autocomplete__list_active' );
      this.searchInput.value = this.valueElement.textContent.trim();
      this.searchInput.focus();

      this.onSearch();
    });

//слушателя событий для ввода поиска и списка элементов автозаполнения
    this.searchInput.addEventListener( 'input', e => this.onSearch());

    this.list.addEventListener( 'click', e => {
      const { target } = e;
      if ( !target.matches( '.autocomplete__item' )) {
        return;
      }

      const { textContent: text } = target,
        { id: value, index } = target.dataset;

      this.onSelect({
        index,
        text,
        value
      });
    });
  }
// замена слова на новое
  onSelect( item ) {
    this.input.selectedIndex = item.index;
    this.valueElement.textContent = item.text;

    this.searchInput.classList.remove( 'autocomplete__search_active' );
    this.list.classList.remove( 'autocomplete__list_active' );
  }
// отображение совпадений
  onSearch() {
    const matches = this.getMatches( this.searchInput.value );

    this.renderMatches( matches );
  }
//массив совпадений и отображает их на странице в виде HTML-элементов.
  renderMatches( matches ) {
    const html = matches.map( item => `
    	<li>
        <span class="autocomplete__item"
        	data-index="${item.index}"
          data-id="${item.value}"
        >${item.text}</span>
      </li>
    `);

    this.list.innerHTML = html.join('');
  }

  getMatches( text ) {
    const option = Array.from(this.input.options);
    const arr = [];
    option.forEach(elem => {
      if(elem.text.toLowerCase().includes(text.toLowerCase())){
        arr.push({
          text: elem.text,
          value: elem.value
        })
      }
    })
    return arr;
  }
}

new Autocomplete( document.querySelector( '.autocomplete' ));


