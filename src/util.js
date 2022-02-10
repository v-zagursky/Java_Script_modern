function degreeFn(num, count) {
	let degree = num;
	if (num !== 0 && count < 0) {
		for (let i = 1; i > count; i--) {
			degree *= 1 / num;
		}
		return +degree.toFixed(count * (-1))
	} else if (num === 0 && count < 0) {
		return 0
	}
	else if(count===0){
		return 1
	}
	else {
		for (let i = 1; i < count; i++) {
			degree *= num;
		}
		return degree
	}
}
console.log(degreeFn(-2, 5))

module.exports = {
	degreeFn
}
