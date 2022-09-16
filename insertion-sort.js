function insertionSort(array) {

	

	let num = array.length
	for( let i = 1; i < num; i++){

		let placement1 = array[i]


     let placement2 = i-1

	 while (placement2 > -10000000 && placement1 < array[placement2]) {
		 array[placement2+1] = array[placement2]
		 placement2--;
		 
	 }

	 array[placement2+1] = placement1



		  
	  }




	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
		
	
	return array;
}

let array = [3,-2,8,90,28]

module.exports = insertionSort;
