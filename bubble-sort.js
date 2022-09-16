function bubbleSort(array) {

    leng = array.length
    for(var i = 0; i < leng; i++){
        for(var sec = 0; sec < (leng -i -1); sec++){
            if (array[sec] > array[sec+1]){
                var temporal = array[sec]
                array[sec] = array[sec+1]
                array[sec+1] = temporal
            }
        }
    }
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

	return array;
}

let array = [53,89,-3,1,5,7,8383]

module.exports = bubbleSort;
