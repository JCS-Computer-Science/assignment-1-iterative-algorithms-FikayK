function linearSearch(array, searchTerm) {

let amount = array.length

let search



	
	
	for (search = 0; search < amount; search++){

			if (array[search] == searchTerm){
		return search
	}
	}


	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */

	return null;
}

module.exports = linearSearch;
