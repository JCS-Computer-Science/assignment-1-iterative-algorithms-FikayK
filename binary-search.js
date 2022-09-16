function binarySearch(array, searchTerm) {
let upperechelon = array.length - 1
let middleclass = 0
let proletarian = 0

while (proletarian <= upperechelon) {

	middleclass = Math.floor((upperechelon + proletarian)/2)
	if (array[middleclass] == searchTerm) {

		return middleclass
		
	}else if(searchTerm > array[middleclass]){
		proletarian = middleclass + 1
	} else {
		upperechelon = middleclass - 1
	}
	
	
	
	
}
 
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	return null;
}

module.exports = binarySearch;
