// 3d scroll

let zSpacing = -1000,
	lastPos = zSpacing / 5,
	$frames = document.getElementsByClassName('frame'),
	frames = Array.from($frames),
	zVals = []

window.onscroll = function() {
	// хак вместо норм реализации (условные значения)
	// при скроле позиция вычисляется и это знаяение используется для перемещения фрейима для оси Z
	// scrollTop берем за 1, отнимаем у lastTop начальную позицию
	// и возвращаем в начальную позицию новое значение.
	let top = document.documentElement.scrollTop,
			delta = lastPos - top
	lastPos = top
	frames.forEach(function(n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		// скорость пролистывания -5
		zVals[i] += delta * -6
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`
				// если каждый кадр меньше zSpacing (он отрицательный - преобразуем в положительный ? 1 : 0)
				// уменьшаем расстояние zSpacing поделив / 1.5 и чем он больше тем раньше будет применяться опасити
				opacity = zVals[i] < Math.abs(zSpacing) / 1.9 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})
}

window.scrollTo(0, 1);