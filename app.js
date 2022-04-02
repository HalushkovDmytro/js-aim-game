const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const board = document.querySelector('#board')
const timeEl = document.querySelector('#time')
const colors = ['#20B2AA','#FF00FF','#D2691E','#00FF00', '#FF1493']

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => 
{
event.preventDefault()
screens[0].classList.add('up')
})
timeList.addEventListener('click', (event) =>
{
	if (event.target.classList.contains('time-btn')) 
	{
		time = parseInt(event.target.getAttribute('data-time'))
		screens[1].classList.add('up')
		startGame()
	}
})

board.addEventListener('click', event => {
	if (event.target.classList.contains('circle')) {
		
		event.target.remove()
		createRandomCircle()
		score++
	}
})


function startGame() {
	setInterval(decreaseTime, 1000)
	timeEl.innerHTML = `00:${time}`
	createRandomCircle() }


function decreaseTime() {
	if (time === 0) {
		finishGame()
	} else {	
		let current = --time
		if (current < 10) {
		current = `0${current}`
	}
		timeEl.innerHTML = `00:${current}`
	}
}


function finishGame() {
	board.innerHTML = `<h1>Ваш счёт:<span class="primary">${score}</span></h1>`
	timeEl.parentNode.classList.add('hide')
}

function createRandomCircle() {
	const circle = document.createElement('div')
	
	const size = getRandomNumber(10, 60)

	const {width, height} = board.getBoundingClientRect()
	const x = getRandomNumber(0, width - size)
	const y = getRandomNumber(0, height - size)

	circle.classList.add('circle')
	circle.style.width = `${size}px`
	circle.style.height = `${size}px`
	circle.style.top = `${y}px`
	circle.style.left = `${x}px`

	setColor(circle)

	board.append(circle)
}


function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
}


function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}


function getRandomNumber(min, max) {
	return Math.round(Math.random()*(max-min) + min)
}





// function winTheGame() {
	// function kill() {
		// const circle = document.querySelector('.circle')
		// if (circle) {
			// circle.click()
		// }
	// }

// setInterval(kill, 0.1)
// }
// winTheGame()