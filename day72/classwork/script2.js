let position = 0

const box = document.getElementById('box')
const text = document.getElementById('text')

function move() {

    box.style.width = position + '%'

    if (position >= 100){
        text.innerText = "you have waisted 10 sec of your life!"
        return
    }

    position += 1
}

setInterval(move, 100)