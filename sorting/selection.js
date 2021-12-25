const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selection(array) {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		let min = i;
		let temp = array[i];
		for (let j = i + 1; j < length; j++) {
			//swap
			if (array[j] < array[min]) {
				min = j;
			}
		}
		array[i] = array[min];
		array[min] = temp;
	}
	console.log(array);
}
selection(array);
