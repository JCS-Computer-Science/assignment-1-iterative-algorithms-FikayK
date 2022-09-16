function selectionSort(array) {

	let num = array.length

	for (let i = 0; i < num-1; i++ ){

		let changing = i

		for (let smallest = i +1 ; smallest < num; smallest++) {
			if (array[smallest] < array[changing]) {

			changing = smallest

			}
			
			}


			let store = array[changing]

		array[changing] = array[i]

		array[i] = store
		}

		

	//



		// let changing = array[i]

		// let first= changing


		
		

	

	



	
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */

	return array;
}


module.exports = selectionSort;
