const emailInput = document.querySelector("#emailInput")
const emailCheck = document.querySelector(".emailCheck")
const emailResult = document.querySelector(".emailResult")

const regExp = /^\[a-zA-Z0-9]+@+gmail|mail+\.+ru|com|net$/

emailCheck.addEventListener("click", ()=>{
    if(regExp.test(emailInput.value)){
        emailResult.innerText = "ok :)"
        emailResult.style.color = "green"
    } else {
        emailResult.innerText = "not ok :("
        emailResult.style.color = "red"
    }
})


const block2 = document.querySelector('.block2')
const blockStart = document.querySelector('.blockStart')

let position = 0

function start() {
    position = position + 5;
    if (position > 395) return;
    block2.style.left = position + 'px';
    animation()
}

function animation() {
    setTimeout(start, 100);
}

blockStart.addEventListener('click', () => {
    animation()
})