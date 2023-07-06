let counterDead = 0;
let counterLost = 0;
getHole = i => document.getElementById(`hole${i}`);
for ( holeIndex = 1; holeIndex < 10; holeIndex++ ) {
    let hole = getHole(holeIndex);
    hole.addEventListener( 'click', function() {
        if ( hole.classList.contains( 'hole_has-mole')){
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }
        if (counterDead === 10) {
            alert ('Вы выиграли');
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
        } else if (counterLost === 5){
            alert ('Вы проиграли');
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterLost;
        }
    });

}