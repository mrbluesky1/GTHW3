const block2 = document.querySelector('.block2')

let positionX = 0
let positionY = 0

const  move2 = () => {
    if (positionX > 0) {
        positionX -= 5
        block2.style.left = `${positionX}px`
        setTimeout(move2, 100)
    } else if (positionY > 0) {
        positionY -= 5
        block2.style.top = `${positionY}px`
        setTimeout(move2, 100)
    } else {
        move()
    }
}

const move = () => {
    if (positionX <=390) {
        positionX += 5
        block2.style.left = `${positionX}px`
        setTimeout(move, 100)
    } else if (positionY <= 390){
        positionY += 5
        block2.style.top = `${positionY}px`
        setTimeout(move, 100)
    } else {
        move2()
    }
}

move()


let time = 0

setInterval(() => {
    if (time < 60) {
        time += 1
        console.log (time)
    }
}, 1000)

