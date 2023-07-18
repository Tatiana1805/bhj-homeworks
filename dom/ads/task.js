let rotator = document.querySelectorAll('.rotator__case')
let i = 0;

function rotatorCase() {
    rotator[i].classList.toggle("rotator__case_active");
    i++
    if (i === rotator.length - 1) {
        i = 0;
    }
    rotator[i].classList.toggle("rotator__case_active");
}
setInterval(rotatorCase, 1000)