
const image = document.getElementById('cookie');
let count = 0;

image.onclick = function sayClick() {
    count ++;
    document.getElementById("clicker__counter").innerHTML = count;
    console.log(count)
    if (image.width === 200){
        image.width = 250;
    }
    else if (image.width === 250){
        image.width = 200;
    }
}

