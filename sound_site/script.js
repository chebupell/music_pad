const sounds = document.querySelectorAll('.sound')
const pads = document.querySelectorAll('.pads div')
const animationZone = document.querySelector('.animation-zone')
const colors = [
    "cadetblue", "crimson", "seagreen", "navy", "darkmagenta", "orange" 
]

for (let i = 0; i < pads.length; i += 1) {
    pads[i].addEventListener('click', playSound(i))
}

function playSound(item) {
    return function () {
        if (sounds[item].loop) {
            sounds[item].loop = false
            sounds[item].stop()
        } else {
            sounds[item].currentTime = 0
            sounds[item].play()
            sounds[item].loop = true
            createBubble(item)
        }
    }
}

function createBubble(item) {
    let bubble = document.createElement('div');
    animationZone.appendChild(bubble)
    bubble.style.backgroundColor = colors[item]
    bubble.style.animation = "jump 2s"
    bubble.addEventListener('animationend', function() {animationZone.removeChild(bubble)})
}