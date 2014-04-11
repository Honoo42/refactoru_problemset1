$(document).on('ready', function() {
  

//  splits the words apart at the first space 
// into separate arrays and then searches these new subarrays for the first index,
// which corresponds to being the first letter of each word. 
// This letter is capitalized and then the words
// are joined back together with a space to mimic their original string
var letterCapitalize = function letterCapitalize( str ) {
    var words = str.split(" ");
    for ( var i = 0; i < words.length; i++ ) {
        var  capital= words[i].charAt(0).toUpperCase();
        words[i] = capital + words[i].substr(1);
    }
    return words.join(" ");
}

console.log (letterCapitalize('i really hope this works'))

// splits the words in the string apart at the first space into  arrays
// and are fed into an array. This new array is searched through with the length property
// and a count is added for each item in this array. The function returns the number of items in
// the array as a number, signalfying the number of words that they string started with
  var wordCount= function(str){
  	var newArr = str.split(' ');
  	var total = 0;
  	for (var i = 0; i < newArr.length; i+= 1) {
  		total += 1;
  	};
  	return total;
  }
  console.log (wordCount('Light Up The Sky Does This Actually Work'))



});
