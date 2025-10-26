const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const mainImg = document.getElementById('main-image')
const thumbs = document.querySelectorAll('.thumb')
const numbers = document.querySelector('.numbers')

let currentIndex = 0
const totalImage = thumbs.length

window.addEventListener('DOMContentLoaded', () => {
	if (thumbs.length > 0) {
		mainImg.src = thumbs[0].src
		thumbs[0].classList.add('active')
	}

	function showImg() {
		mainImg.src = thumbs[currentIndex].src
		thumbs.forEach(t => t.classList.remove('active'))
		thumbs[currentIndex].classList.add('active')

		numbers.textContent = `${currentIndex + 1}/${totalImage}`
	}

	thumbs.forEach((thumb, index) => {
		thumb.addEventListener('click', () => {
			currentIndex = index
			showImg()
		})
	})

	prev.addEventListener('click', () => {
		currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length
		showImg()
	})

	next.addEventListener('click', () => {
		currentIndex = (currentIndex + 1) % thumbs.length
		showImg()
	})
})
