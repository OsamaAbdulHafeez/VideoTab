const video = document.querySelector('video')
// const btnOff = document.getElementById('off')
const btnon = document.getElementById('on')
// btnOff.style.visibility = "hidden"
video.pause()

const btns = document.querySelector('.btns')
btns.addEventListener('click', function () {
    if (video.paused) {
        video.play()
        btnon.classList.add('animationOn')
        btnon.classList.remove('animationOff')
        btnon.textContent = "OFF"
    }
    // if(!video.pause){
    //     console.log("Hello")
    // }
    else if (!video.paused) {
        video.pause()
       btnon.classList.remove('animationOn')
       btnon.classList.add('animationOff')
        btnon.textContent = "ON"
    }


})